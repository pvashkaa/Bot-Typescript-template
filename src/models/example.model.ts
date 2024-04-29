import { Document, Schema, model } from "mongoose";

export type ExampleDocument = Document & {
  exampleField: number;
};

export const ExampleSchema = new Schema({
  exampleField: {
    type: Number,
  },
});

export const ExampleModel = model<ExampleDocument>(`example`, ExampleSchema);
