import { ObjectId } from "mongodb";

export default class Blog {
  constructor(
    public name: string,
    public content: string,
    public id?: ObjectId
  ) {}
}