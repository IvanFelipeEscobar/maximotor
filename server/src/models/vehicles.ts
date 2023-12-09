import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
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

  @prop({type: () => [repair]})
};

 export const vehicle = getModelForClass(Vehicle)