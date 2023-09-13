import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
@modelOptions({
    schemaOptions: {
      timestamps: true,
    }
  })
  export class User {
    public _id?: string;

    @prop({required: true})
    public username!: string;
  
    @prop({ required: true, unique: true })
    public slug!: string;
  
    @prop({ required: true })
    public email!: string;
  
    @prop({ required: true })
    public password!: string;
  
    @prop({ required: true, default: false})
    public suscription?: boolean;

  }
  export const user = getModelForClass(User)