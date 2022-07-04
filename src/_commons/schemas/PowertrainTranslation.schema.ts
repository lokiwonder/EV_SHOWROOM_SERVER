import { Powertrain_T } from '@common/types/PowertrainTranslation.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PowertrainTranslationDocument = PowertrainTranslation & Document;

@Schema()
export class PowertrainTranslation {
  // description:
  @Prop()
  country: string;
  // description:
  @Prop()
  languages: Array<string>;
  // description:
  @Prop()
  default_language: string;
  // description:
  @Prop()
  powertrain_version: number;
  // description:
  @Prop()
  translation_version: number;
  // description:
  @Prop()
  translations: Array<Powertrain_T>;
}

export const PowertrainTranslationSchema = SchemaFactory.createForClass(
  PowertrainTranslation,
);
