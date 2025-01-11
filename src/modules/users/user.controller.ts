import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { ValidationPipe } from "./validation/validation.pipe";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }
    @Get()
    getAllUsers(@Body() body : any) {
        console.log(body);
        return this.userService.getAllUsers();
    }

    
    @Get(":id")
    getUserWithID(@Param("id" , ValidationPipe) param : number) {
        console.log(param);
        return 'this.userService.getAllUsers()';
    }

    @Post()
    testQuery(@Query() query : any) {
        console.log(query);
        return this.userService.getAllUsers();
    }

}
