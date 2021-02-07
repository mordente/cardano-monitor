const axios = require('axios');
const cheerio = require('cheerio');
const {prompt} = require('./prompt')


const url = "https://br.investing.com/crypto/cardano/ada-usd";


async function getCryptoValue() {
    const resp = await axios.get(url);
    const html = resp.data;
    const $ = cheerio.load(html);
    const cryptoValue = $('#last_last').text();
    return cryptoValue;
}

function checkValue(cryptoValue, inputValue) {
    if(cryptoValue <= inputValue) {
        console.log('Está bom!')
    }
}

(async function start() {
    try {
        const {moeda, valor} = await prompt();
        const cryptoValue = await (await getCryptoValue()).replace(',', '.');

        checkValue(cryptoValue, valor)
        console.log(`Input: ${valor} || ADA: ${cryptoValue}`)
    }catch(e) {
        console.log(e);
    }
})()