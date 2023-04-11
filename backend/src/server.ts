import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import express from 'express';
import boardRouter from './routers/board.routes'

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/TrelloLikeBoardDB');
const conn = mongoose.connection;

conn.once('open', () => {
    console.log('mongo open');
})

const router = express.Router();

app.use('/', router)
router.use('/board', boardRouter)

app.listen(4000, () => console.log(`Express server running on port 4000`));
