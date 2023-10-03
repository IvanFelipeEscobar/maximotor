import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";
import { Vehicle } from "./vehicles";
import bcrypt from "bcrypt";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @prop()
  public _id?: string;

  @prop({ required: true })
  public username!: string;

  @prop({ required: true })
  public phone?: string;

  @prop({ required: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  @prop()
  public address?: string;

  @prop({ required: true, default: false })
  public isAdmin!: boolean;

  @prop({ type: () => [Vehicle] })
  public cars?: Vehicle[];

  // public static async verifyPassword(password:string) {
  //   return bcrypt.compare(password, this.password)
  // }
  }
}

export const user = getModelForClass(User);
