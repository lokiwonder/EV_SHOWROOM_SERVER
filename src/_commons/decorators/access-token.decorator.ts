import AuthJwt from '@common/types/AuthJwt.type';
import { createParamDecorator, ExecutionContext, Logger } from '@nestjs/common';

const logger = new Logger('GetJwtData Decorator');

// description: jwt의 데이터 가져오는 decoration
export const GetJwtData = createParamDecorator(
  (data, ctx: ExecutionContext): AuthJwt => {
    const req = ctx.switchToHttp().getRequest();
    logger.verbose('🟢🟢🟢🟢🟢 Access GetJwtData Decorator 🟢🟢🟢🟢🟢');
    return {
      id: req.user.id,
      dealer_code: req.user.dealer_code,
      country: req.user.country,
      dealership: req.user.dealership,
    };
  },
);
