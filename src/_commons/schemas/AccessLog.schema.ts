import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AccessLogDocument = AccessLog & Document;

@Schema()
export class AccessLog {
  // description:
  @Prop()
  app_id: string;
  // description:
  @Prop()
  device_info: string;
  // description:
  @Prop()
  access_datetime: string;
  // description:
  @Prop()
  access_status: boolean;
}

export const AccessLogSchema = SchemaFactory.createForClass(AccessLog);
