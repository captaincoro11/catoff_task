import { IsString, IsEmail, IsNotEmpty, IsNumber } from "class-validator";

export class WalletDto{
    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsString()
    @IsNotEmpty()
    password:string;

    @IsNumber()
    amount:number

}

export class AmountDto{
    @IsNumber()
    amount:number
}