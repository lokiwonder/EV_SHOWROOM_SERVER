import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TranslationLogDocument = TranslationLog & Document;

@Schema()
export class TranslationLog {
  // description:
  @Prop()
  country: string;
  // description:
  @Prop()
  dealer_code: string;
  // description:
  @Prop()
  log_message: string;
  // description:
  @Prop()
  translation_datetime: string;
}

export const TranslationLogSchema =
  SchemaFactory.createForClass(TranslationLog);
