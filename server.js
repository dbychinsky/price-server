const express = require('express');
const app = express();
const cors = require('cors');
const urlGoods = `https://www.wildberries.by/catalog/180954182/detail.aspx?targetUrl=SN`;
// const urlGoods = `https://jsonplaceholder.typicode.com/users`;

app.use(cors());

const axios = require('axios');
const PORT = 3000;

app.get('/fetch-data', async (req, res) => {
    try {
        // Замените URL на адрес сервера, с которого вы хотите получить данные
        const response = await axios.get(urlGoods);

        // Отправляем полученные данные в формате JSON
        res.json(response.data);
    } catch (error) {
        console.error('Ошибка при получении данных:', error);
        res.status(500).json({error: 'Ошибка при получении данных'});
    }
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});