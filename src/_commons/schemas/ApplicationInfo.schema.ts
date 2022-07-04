import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApplicationInfoDocument = ApplicationInfo & Document;

@Schema()
export class ApplicationInfo {
  // description:
  @Prop()
  app_id: string;
  // description:
  @Prop()
  app_type: string;
  // description:
  @Prop()
  app_version: number;
  // description:
  @Prop()
  device_info: string;
  // description:
  @Prop()
  country: string;
  // description:
  @Prop()
  dealer_code: string;
  // description:
  @Prop()
  dealer_ship: string;
  // description:
  @Prop()
  create_datetime: string;
}

export const ApplicationInfoSchema =
  SchemaFactory.createForClass(ApplicationInfo);
