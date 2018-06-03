/**
 * @Author sn1p3r
 */
import {Credentials} from 'aws-sdk';
import {config} from 'dotenv';

class Config {
  public readonly credentials = new Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });
  constructor() {
    config();
  }
}

export default new Config();
