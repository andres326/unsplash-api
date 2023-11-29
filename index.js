import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connect } from './mongodb.connect.js';
import { router as userRoutes } from './routes/users.routes.js';
import { router as imagesRoutes } from './routes/images.routes.js';

const PORT = process.env.PORT || 4001;

connect();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', userRoutes);
app.use('/images', imagesRoutes);

app.listen(PORT, () => {
  console.log('Listening on port 4001');
});
