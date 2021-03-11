const express = require('express');
const cors = require('cors')
const config = require('./config/app');

const app = express();

const PORT = config.appPort;

app.use(cors());

// Mount routes
app.use('/api/users', require('./routes/user-routes'));

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
})



