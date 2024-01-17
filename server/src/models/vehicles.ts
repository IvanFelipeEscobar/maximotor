import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { Repairs } from "./repairs";
@modelOptions({
    schemaOptions: {
      timestamps: true, // vehicle added on...
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

  @prop({type: () => [Repairs]})
  public repairs?: Repairs[]
};

 export const vehicle = getModelForClass(Vehicle)