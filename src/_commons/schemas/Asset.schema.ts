import { APP_TYPE } from '@common/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AssetDocument = Asset & Document;

@Schema()
export class Asset {
  @Prop()
  // electrified, powertrain, connectivity
  app_type: APP_TYPE;

  @Prop()
  asset_name: string;

  @Prop()
  asset_version: number;

  @Prop()
  images: string[];

  @Prop()
  videos: string[];

  @Prop()
  lotties: string[];
}

export const AssetSchema = SchemaFactory.createForClass(Asset);
