import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true, // last edited on...
  },
})
export class UserInfo {
  @prop({ 
    required: true,
    validate: {
      validator: (val:  string) => /^\d{10}$/.test(val),
      message: val => `${val.value} is not a valid phone number`
    }
   })
  public phone!: string;
  @prop({ 
    required: true })
  public firstName!: string;
  @prop({ required: true })
  public lastName!: string;
  @prop()
  public streetAddress?: string;
  @prop()
  public streetAddress2?: string;
  @prop()
  public city?: string;
  @prop()
  public state?: string;
  @prop()
  public zip?: string;

}

export const userInfo = getModelForClass(UserInfo);
