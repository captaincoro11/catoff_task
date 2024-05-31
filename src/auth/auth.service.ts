
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from './dto';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class AuthService {
    constructor(
      private prisma: PrismaService,
     
    ) {}
  
    async signup(dto: AuthDto) {

      const hash = await bcrypt.hash(dto.password,10);
      
      try {
        const user = await this.prisma.user.create({
            data:{
                email:dto.email,
                password:hash
            }
        });

        const wallet = await this.prisma.wallet.create({
            data:{
            userId:user.id


            }
        })

        return {
            message:"User successfully registered",
            user,
            wallet
        }
    }
  
    catch (error) {
        if (
          error instanceof
          PrismaClientKnownRequestError
        ) {
          if (error.code === 'P2002') {
            throw new ForbiddenException(
              'User already exists please signin',
            );
          }
        }
        throw error;
      }
    }

    async signin(dto:AuthDto){

        try{
            const user = await this.prisma.user.findFirst({
               where:{
                email:dto.email
               }
            });
            const wallet = await this.prisma.wallet.findFirst({
                where:{
                    userId:user.id
                }
            })
            if(!user){
                throw new ForbiddenException("User does not exist please SignUp First")
            };

            const isMatch = await bcrypt.compare(dto.password,user.password);
            if(!isMatch){
                throw new ForbiddenException("Wrong Password Entered")
            }

            return {
                message:"User successfully Login",
                user,
                wallet
            }
        }
        catch(error){
            throw new ForbiddenException(error.message)
        }

    }


 
}
