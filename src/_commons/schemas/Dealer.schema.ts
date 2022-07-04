import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DealerDocument = Dealer & Document;

@Schema()
export class Dealer {
  // description:
  @Prop()
  id: string;
  // description:
  @Prop()
  dealer_code: string;
  // description:
  @Prop()
  password: string;
  // description:
  @Prop()
  country: string;
  // description:
  @Prop()
  dealership: string;
}

export const DealerSchema = SchemaFactory.createForClass(Dealer);
