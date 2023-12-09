import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import e from "express";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
 export class Repair{
    @prop({required: true})
    public parts!: string[];

    @prop({required: true})
    public repair!: string;
 }

 export const repair = getModelForClass(Repair)