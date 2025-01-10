import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";



@Module({
    controllers: [UsersController],
    providers: [],
    exports: [],
    imports: []
})

export class UserModule {}