/**
 * @Author sn1p3r
 */
import {Document, Model, model, Schema} from 'mongoose';

export class Example {
  public name: string;
  public email: string;

  constructor(other: { name: string, email: string }) {
    this.name = other.name;
    this.email = other.email;
  }
}

export interface IExample extends Document, Example {
}

export const ExampleSchema = new Schema({
  email: String,
  name: String,
  time: Date,
});

export const ExampleModel: Model<IExample> = model<IExample>('example', ExampleSchema);
