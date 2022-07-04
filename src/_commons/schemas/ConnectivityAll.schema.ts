import {
  TemplateConnectivity,
  TemplateConnectivitySub,
  TemplateConnectivitySub_2,
} from '@common/types/ConnectivityAll.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConnectivityAllDocument = ConnectivityAll & Document;

@Schema()
export class ConnectivityAll {
  // description:
  @Prop()
  connectivity_version: number;
  // description:
  @Prop()
  bluelink: Array<
    TemplateConnectivity | TemplateConnectivitySub | TemplateConnectivitySub
  >;
  // description:
  @Prop()
  charge_myHyundai: Array<
    TemplateConnectivity | TemplateConnectivitySub | TemplateConnectivitySub_2
  >;
}

export const ConnectivityAllSchema =
  SchemaFactory.createForClass(ConnectivityAll);
