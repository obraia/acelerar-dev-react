const express = require('express');
const api = require('./services/api');
require('dotenv/config');

const sha1 = require('sha1');

const path = require('path');
const fs = require('fs');
const FormData = require('form-data');

const decryptor = require('./utils/decryptor');
const saveFile = require('./utils/saveFile');

const app = express();

app.get('/send', async (req, res) => {

    const response = await api.get(process.env.API_GET_URL);

    const shift = response.data.numero_casas;
    const encryptedString = response.data.cifrado;
    const decryptedString = decryptor(encryptedString, shift);
    const cryptoSummary = sha1(decryptedString);

    response.data.decifrado = decryptedString; // -> answers
    response.data.resumo_criptografico = cryptoSummary; // -> answers

    const filePath = path.join(__dirname, 'tmp/');

    await saveFile(response.data, filePath, 'answer.json');

    const fileStream = await fs.createReadStream(filePath + '/answer.json');

    const formData = new FormData();
    formData.append('answer', fileStream, 'file');

    const formHeaders = formData.getHeaders();

    const config = { headers: { ...formHeaders } };

    await api.post(process.env.API_POST_URL, formData, config)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => console.log(err));

    return res.json(response.data);
});

app.listen(3333, () => { console.log('Server started') });