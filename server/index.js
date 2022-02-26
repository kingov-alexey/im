require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const router = require('./routers/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware.js');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

//должен быть в последнию очередь. Обработка ошибок, полследний Middleware
app.use(errorHandler);

//Проверка ответа что сервер работает
// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'WORKING!!!' });
// });

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
