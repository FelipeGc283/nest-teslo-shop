import { ExecutionContext, InternalServerErrorException, createParamDecorator } from "@nestjs/common";
import { use } from "passport";


export const RawHeaders = createParamDecorator(
    ( data: string, ctx: ExecutionContext ) => {
        
        const req = ctx.switchToHttp().getRequest();
        return req.rawHeaders;
    }
);