import { Connectivity_T } from '@common/types/ConnectivityTranslation.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConnectivityTranslationDocument = ConnectivityTranslation &
  Document;

@Schema()
export class ConnectivityTranslation {
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
  connectivity_version: number;
  // description:
  @Prop()
  translation_version: number;
  // description:
  @Prop()
  translations: Array<Connectivity_T>;
}

export const ConnectivityTranslationSchema = SchemaFactory.createForClass(
  ConnectivityTranslation,
);
