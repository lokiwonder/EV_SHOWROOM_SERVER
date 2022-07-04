import {
  Template_1,
  Template_2,
  Template_3,
} from '@common/classes/ElectrifiedAll.class';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ElectrifiedAllDocument = ElectrifiedAll & Document;

// description:
@Schema()
export class ElectrifiedAll {
  // description:
  @Prop()
  electrified_item_name: string;
  // description:
  @Prop()
  version: number;
  // description:
  @Prop()
  electrified_subtitle: string;
  // description:
  @Prop()
  electrified_version: number;
  // description:
  @Prop()
  main_image: string;
  @Prop()
  // description:
  @Prop()
  rotation_image: string;
  // description:
  @Prop()
  calculation_image: string;
  // description:
  @Prop()
  calculation_formula: string;
  // description:
  @Prop({ type: Template_3 })
  main: Template_3;
  // description:
  @Prop()
  highlights: Array<Template_1 | Template_2 | Template_3>;
  // description:
  @Prop()
  charging: Array<Template_1 | Template_2 | Template_3>;
  // description:
  @Prop()
  benefits: Array<Template_1 | Template_2 | Template_3>;
}

export const ElectrifiedAllSchema =
  SchemaFactory.createForClass(ElectrifiedAll);
