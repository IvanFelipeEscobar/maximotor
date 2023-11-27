import { modelOptions, prop, getModelForClass, DocumentType, pre } from "@typegoose/typegoose";
import { Vehicle } from "./vehicles";
import bcrypt from "bcrypt";
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})

@pre<User>(`save`, async function(this: DocumentType<User>){
     if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
   } })

export class User {
  public _id?: string

  @prop({ required: true, unique: true })
  public email!: string;

  @prop({ required: true })
  public password!: string;


  // Method to verify the password
  async verifyPassword(this: DocumentType<User>, password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }

  }


export const user = getModelForClass(User);
