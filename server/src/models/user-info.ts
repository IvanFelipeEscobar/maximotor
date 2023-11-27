import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { Vehicle } from "./vehicles";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class UserInfo {
  @prop({ required: true })
  public phone?: string;
  @prop({ required: true })
  public fName?: string;
  @prop({ required: true })
  public lName?: string;

  public address?: string;

  @prop({ type: () => [Vehicle] })
  public cars?: Vehicle[];
}

export const userInfo = getModelForClass(UserInfo);
