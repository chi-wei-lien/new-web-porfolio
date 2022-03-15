import { Schema, model } from 'mongoose';

interface Blog {
  title: string;
  content: string;
  pic: string;
  date: Date;
}

const schema = new Schema<Blog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, required: true },
  pic: {type: String}
});

export default model<Blog>('Blog', schema);