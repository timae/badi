const express = require('express');
const app = express();

// Sample data (replace with your actual data)
const letzigrabenData = {
    title: "Freibad Letzigraben",
    status: "Open",
    lastUpdate: "Sun, 12.05.2024 12:17",
    moreInfoUrl: "https://www.stadt-zuerich.ch/content/ssd/de/index/sport/schwimmen/sommerbaeder/freibad_letzigraben.html"
};

// Route to display data for Freibad Letzigraben
app.get('/', (req, res) => {
    res.send(`
        <h1>${letzigrabenData.title}</h1>
        <p>Status: ${letzigrabenData.status}</p>
        <p>Last Update: ${letzigrabenData.lastUpdate}</p>
        <p>More Info: <a href="${letzigrabenData.moreInfoUrl}">${letzigrabenData.moreInfoUrl}</a></p>
    `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
