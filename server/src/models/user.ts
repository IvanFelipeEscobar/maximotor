import {
  modelOptions,
  prop,
  getModelForClass,
  DocumentType,
  pre,
} from "@typegoose/typegoose";
import bcrypt from "bcrypt";
import { UserInfo } from "./user-info";
import { Vehicle } from "./vehicles";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
//using mongoose middleware ('pre' hook) to encrypt password
@pre<User>(`save`, async function (this: DocumentType<User>) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
})
// user obj has email/password for auth, and i separated user contact info && vehicle(s) 
export class User {
  public _id?: string;

  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;

  public userInformation?: UserInfo;

  @prop({ type: () => [Vehicle] })
  public cars?: Vehicle[];
  
  // Method to verify the password
  async verifyPassword(
    this: DocumentType<User>,
    password: string
  ): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export const user = getModelForClass(User);
