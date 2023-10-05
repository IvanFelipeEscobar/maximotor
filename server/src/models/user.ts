import { modelOptions, prop, getModelForClass, DocumentType } from "@typegoose/typegoose";
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

  // Pre-save hook to hash the password
  async preSaveHook(this: DocumentType<User>) {
    if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  }

  // Method to verify the password
  async verifyPassword(this: DocumentType<User>, password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  }


export const user = getModelForClass(User);
