const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: `./../../config.env` });
const Tour = require('./../../models/tourModel.js');

if (!process.env.DATABASE || !process.env.DATABASE_PASSWORD) {
  throw new Error(
    'Environment variables DATABASE or DATABASE_PASSWORD are missing.',
  );
}

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log('DB Connected');
  });

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'),
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data Successfully Loaded');
  } catch (err) {
    console.log(err);
  }
};

const delateData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data Successfully Deleted');
  } catch (err) {
    console.log(err);
  }
};

importData();
