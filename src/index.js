const express = require('express');

const config = require('./config');
const setupViewEngine = require('./config/viewEngine');

const app = express();
setupViewEngine(app);

app.use(express.static('src/public'));

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`));