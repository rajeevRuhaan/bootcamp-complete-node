/* eslint-disable import/no-useless-path-segments */
/* eslint-disable prettier/prettier */
const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');

dotenv.config({ path: './config.env' });

//console.log(app.get('env'));
//console.log(process.env);
//connecting with mongoose
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

//READ JSON file

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//IMport data into db
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successifully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

//Delete al data from db
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Daa successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
