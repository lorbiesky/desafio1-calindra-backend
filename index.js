import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import morgan from 'morgan';
import express from 'express';
import consign from 'consign';
import bodyParser from 'body-parser';

const app = express();

const server = http.createServer(app);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());

dotenv.config();

consign().then('./apis').then('./routes').into(app);

server.listen(process.env.APP_PORT, () => {
  console.log('Server running...');
});
