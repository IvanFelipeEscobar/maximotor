import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true, // last edited on...
  },
})
export class UserInfo {
  @prop({ required: true })
  public phone!: string;
  @prop({ required: true })
  public fName!: string;
  @prop({ required: true })
  public lName!: string;

  public streetAddress?: string;
  public city?: string;
  public state?: string;
  public zip?: string;
}

export const userInfo = getModelForClass(UserInfo);
