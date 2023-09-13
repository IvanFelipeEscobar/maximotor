import { modelOptions, prop, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
  schemaOptions: {
    timestamps: true,
  }
})

export class ShopItem {
  public _id?: string;

  @prop({ required: true })
  public name!: string;

  @prop({ required: true, unique: true })
  public slug!: string;

  @prop({ required: true })
  public description!: string;

  @prop({ required: true })
  public image!: string;

  @prop({ required: true, default: 0 })
  public price!: number;
}
export const shopItems = getModelForClass(ShopItem);
