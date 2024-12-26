const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 3000;
const apiUrl = `https://card.wb.ru/cards/v2/detail?curr=byn&dest=-59202&nm=`

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get(`/`, async (req, res) => {
    const id = req.query.id;

    try {
        // Замените URL на адрес сервера, с которого вы хотите получить данные
        const response = await axios.get(`${apiUrl}${id}`);

        // Отправляем полученные данные в формате JSON
        res.json(response.data.data.products[0]);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).json({error: 'Ошибка при получении данных'});
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});