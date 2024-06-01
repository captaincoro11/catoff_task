import { Body, Controller, Delete, Get, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthDto } from "src/auth/dto";


@Controller('user')
export class UserController {
    constructor(private userService:UserService){}

    @Get('all')
    async GetAllUsers(){
        return this.userService.GetAllUsers();
    }

    @Delete('delete')
    async deleteUsers(@Body() dto:AuthDto){
        return this.userService.deleteUsers(dto)
    }

    @Put('update')
    async UpdateUser(@Body() dto:AuthDto){
        return this.userService.UpdatePassword(dto);
    }

    @Get('me')
    async GetMe(@Body() dto:AuthDto){
        return this.userService.GetMe(dto)
    }

    


}