import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ApplicationUpdateLogDocument = ApplicationUpdateLog & Document;

@Schema()
export class ApplicationUpdateLog {
  // description:
  @Prop()
  app_id: string;
  // description:
  @Prop()
  update_version: string;
  // description:
  @Prop()
  update_datetime: string;
}

export const ApplicationUpdateLogSchema =
  SchemaFactory.createForClass(ApplicationUpdateLog);
