import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
// import { Vehicle } from "./vehicles";
@modelOptions({
    schemaOptions: {
      timestamps: true,
    }
  })
  
  export class User {
    @prop()
    public _id?: string;

    @prop({required: true})
    public username!: string;
  
    @prop({ required: true})
    public phone?: string;
  
    @prop({ required: true })
    public email!: string;
  
    @prop({ required: true })
    public password!: string;

    @prop()
    public address?: string

    @prop({required: true, default: false})
    public isAdmin!: boolean

  // @prop({ ref: () => [Vehicle] })
  // public cars?: Ref<Vehicle>[]; // This is a Reference Array



  }
  export const user = getModelForClass(User)