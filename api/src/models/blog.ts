import { Schema, model } from 'mongoose';

interface Blog {
  title: string;
  content: string;
  pic: string;
  date: Date;
  published: boolean;
}

const schema = new Schema<Blog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  pic: {type: String},
  published: { type: Boolean, required: true, default: false}
});

export default model<Blog>('Blog', schema);