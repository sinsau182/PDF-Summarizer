require('dotenv').config();
const { Client } = require("@octoai/client");
const prompts = require('prompts')
prompts.override(require('yargs').argv)
const pdf = require('pdf-parse')
const fs = require('fs/promises')
const path = require('path')

const client = new Client(process.env.OCTOAI_TOKEN);

(async () => {

    let models = await client.chat.listAllModels().map
    (model => {
        return {
            title: model,
            value: model
        }
    })

    const modelSelected = await prompts({
        type: 'select',
        name: 'model',
        message: 'Which model would you like to use?',
        choices: models,
        initial: 7,
    });

    const allFiles = await fs.readdir('./files');
    let pdfs = allFiles.filter(file => path.extname(file).toLowerCase() === '.pdf');

    let choices = pdfs.map(pdf => {
        return {
            title: pdf,
            value: `${pdf}`,
        }
    })

    const pdfSelected = await prompts([
        {
            type: 'select',
            name: 'pdf',
            message: 'Which PDF would you like to use?',
            choices: choices,
        }
    ])

    const databuffer = await fs.readFile(`./files/${pdfSelected.pdf}`);

    const text = await pdf(databuffer).then(data => {
        return data.text;
    })

    const completion = await client.chat.completions.
    create({
        "model": modelSelected.model,
        "messages": [
            {
                "role": "system",
                "content": "Summarize the following PDF document in 3 sentences or less.",
            },{
                "role": "user",
                "content": "PDF Content:\n" + text,
            }
        ],
    })

    // console.log(completion.choices[0].message.content)
    fs.writeFile(`./files/${pdfSelected.pdf}.txt`,
        completion.choices[0].message.content, 'utf8')

        console.log('Summary written to file') ;

})()