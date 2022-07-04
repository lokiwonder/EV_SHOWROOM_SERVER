import { Template_1 } from '@common/types/ElectrifiedAll.type';
import {
  TemplateLottie,
  TemplatePowertrain,
} from '@common/types/PowertrainAll.type';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PowertrainAllDocument = PowertrainAll & Document;

@Schema()
export class PowertrainAll {
  // description:
  @Prop()
  powertrain_version: number;
  // description:
  @Prop()
  mild_hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  @Prop()
  hydrogen: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  @Prop()
  full_electric: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  @Prop()
  plug_in_hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
  // description:
  @Prop()
  hybrid: Array<Template_1 | TemplatePowertrain | TemplateLottie>;
}

export const PowertrainAllSchema = SchemaFactory.createForClass(PowertrainAll);
