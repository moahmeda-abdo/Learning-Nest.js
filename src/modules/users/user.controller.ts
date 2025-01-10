import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UsersController {
    constructor(private userService: UserService) { }
    @Get()
    getAllUsers() {
        return this.userService.getAllUsers();
    }

}
