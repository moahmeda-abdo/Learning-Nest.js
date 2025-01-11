import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Query, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { ValidationPipe } from "./validation/validation.pipe";
import { Roles } from "./decorators/roles.decorator";
import { RolesGuard } from "./guards/roles.guards";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }
    @Roles(['admin'])
    @UseGuards(RolesGuard)
    @Get()
    getAllUsers(@Body() body: any) {
        console.log(body);
        return this.userService.getAllUsers();
    }


    @Get(":id")
    getUserWithID(@Param("id", ValidationPipe) param: number) {
        console.log(param);
        return 'this.userService.getAllUsers()';
    }

    @Post()
    testQuery(@Query() query: any) {
        console.log(query);
        return this.userService.getAllUsers();
    }

}
