import { Electrified_T } from '@common/types/ElectrifiedTranslation.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElectrifiedTranslationDocument = ElectrifiedTranslation & Document;

@Schema()
export class ElectrifiedTranslation {
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
  electrified_version: number;
  // description:
  @Prop()
  translation_version: number;
  // description:
  @Prop()
  displayable_electrifies: Array<string>;
  // description:
  @Prop()
  translations: Array<Electrified_T>;
}

export const ElectrifiedTranslationSchema = SchemaFactory.createForClass(
  ElectrifiedTranslation,
);
