/**
 * @Author sn1p3r
 */
import {Config, Credentials} from 'aws-sdk';
import * as bluebird from 'bluebird';
import bodyParser = require('body-parser');
import {config} from 'dotenv';
import * as express from 'express';
import {Application, Router} from 'express';
import * as mongoose from 'mongoose';
import {AppRouter} from './appRouter';

class Main {
  protected app: Application;
  protected router: Router;

  constructor() {
    config();
    process.env.ENV = process.env.ENV || 'dev';
    process.env.PORT = process.env.PORT || '3000';

    const MONGO_URI = process.env.MONGO_URI;

    this.app = express();
    this.router = express.Router();

    // console.log(process.env.AWS_ACCESS_KEY_ID);
    // console.log(process.env.AWS_SECRET_ACCESS_KEY);

    const awsCreds = new Credentials(process.env.AWS_ACCESS_KEY_ID, process.env.AWS_SECRET_ACCESS_KEY);
    const awsConfig = new Config({credentials: awsCreds, region: 'us-east-1'});

    this.app.use(bodyParser.urlencoded({extended: true}));
    this.app.use(bodyParser.json());
    this.app.use('/api/v1', this.router);

    const ROUTES = new AppRouter().paths(this.router);

    (<any> mongoose).Promise = bluebird;

    mongoose.connect(MONGO_URI)
      .then(() => {
        this.app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
      })
      .catch(console.log);
  }
}

export default new Main();
