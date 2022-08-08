import { APP_TYPE, COUNTRY_CODE } from '@common/enums';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AppDocument = App & Document;

@Schema()
export class App {
  // description: Application에서 생성한 app_id //
  @Prop()
  app_id: string;
  // description: Application 사용 국가 //
  @Prop()
  country_code: COUNTRY_CODE;
  // description: Application type //
  @Prop()
  app_type: APP_TYPE;
  // description: Application을 사용하는 Device id //
  @Prop()
  device_info: string;
  // description: Application을 사용하는 Dealer code //
  @Prop()
  dealer_code: string;
}

export const AppSchema = SchemaFactory.createForClass(App);
