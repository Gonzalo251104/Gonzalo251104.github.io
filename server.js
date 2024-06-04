const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.static('public'));

let sheetData;

app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send('No file uploaded.');
    }

    fs.readFile(file.path, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }

        const XLSX = require('xlsx');
        const workbook = XLSX.read(data, { type: 'buffer' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        sheetData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        res.send('File uploaded and data stored.');
    });
});

app.get('/data', (req, res) => {
    if (!sheetData) {
        return res.status(404).send('No data available.');
    }
    res.json(sheetData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
