import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})
 export class Repairs{
    @prop({type: () => [String], required: true})
    public parts!: string[];

    @prop({required: true})
    public repair!: string;

    @prop()
    public mileage?: number;
 }

 export const repairs = getModelForClass(Repairs)