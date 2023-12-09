import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { Repair } from "./repair-info";
@modelOptions({
    schemaOptions: {
      timestamps: true,
    }
  })  
  
export class Vehicle {

  @prop({ required: true })
  public year!: number;

  @prop({ required: true })
  public make!: string;

  @prop({ required: true })
  public model!: string;

  @prop()
  public mileage?: number;

  @prop({type: () => [Repair]})
  public?: Repair[]
};

 export const vehicle = getModelForClass(Vehicle)