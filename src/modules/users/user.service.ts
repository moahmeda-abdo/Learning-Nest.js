import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { ForbiddenException } from "src/modules/users/exceptions/forbidden.exception";




@Injectable()
export class UserService {
    getAllUsers() {
        // you can use one of these 2 ways
        throw new ForbiddenException();
        throw new HttpException('Error from Exception', HttpStatus.UNAUTHORIZED);

        return 'Get all users from service';
    }
}