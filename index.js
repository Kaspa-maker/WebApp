// Load the http module to create an http server.
import http from 'http';
import dotenv from 'dotenv';
import driver from './api/drivers';
import track from './api/tracks';
import express from 'express';
import './db'
import loadDrivers from './driversData';
import loadTracks from './tracksData';
import bodyParser from 'body-parser';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
const port = process.env.PORT;

app.use(express.static('public'));

if (process.env.seedDb) {
  loadDrivers();
  loadTracks();
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api/drivers', driver);
app.use('/api/tracks', track);
//app.use(express.static('public'));

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
