const inquirer = require('inquirer');

async function prompt(){
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'Qual moeda deseja monitorar?',
            choices: [
                'ADA',
                'BTC'
            ]
        },
        {
            type: 'input',
            name: 'quant',
            message: 'Com qual valor deseja ser avisado?',
        }
    ])

    const resp = {
        moeda: answers['choice'],
        valor: answers['quant']
    }
    return resp;
  
}

module.exports = {prompt}