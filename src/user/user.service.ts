
import { ForbiddenException, Injectable } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class UserService {
    constructor(private prisma:PrismaService){}


    async GetMe(dto:AuthDto){
        try {
            const user = await this.prisma.user.findFirst({
                where:{
                    email:dto.email

                }
            });

            const wallets = await this.prisma.wallet.findMany({
                where:{
                    userId:user.id
                }
            });

            return{
                message:"Date Fetched Successfully",
                user,
                wallets
            }
            
        } catch (error) {
            
        }
    }

    async GetAllUsers(){
        try{
        const AllUsers = await this.prisma.user.findMany({});

        return{
            message:"All Users Fetched SuccessFully",
            AllUsers
        };


        }
        catch(error){
            throw new ForbiddenException(error.message)

        }


    }

    async deleteUsers(dto:AuthDto){
        try {
            const user = await this.prisma.user.findFirst({
                where:{
                    email:dto.email
                }
            });

            if(!user){
                return {
                    message:"User does not exist"
                }
            };

            const wallets = await this.prisma.wallet.findMany({
                where:{
                    userId:user.id
                }
            });

            await this.prisma.wallet.deleteMany({
                where:{
                    userId:user.id
                }
            });

            await this.prisma.user.delete({
                where:{
                    email:dto.email
                }
            });

         
            return {
                message:'User and Wallet Deleted Successfully'
            }
            
        } catch (error) {
            throw new ForbiddenException(error.message)
            
        }
    }

    async UpdatePassword(dto:AuthDto){
        try {
            const user = await this.prisma.user.findFirst({
                where:{
                    email:dto.email
                }
            });

            if(!user){
                return {
                    message:"User does not exist"
                }
            };

            const newHashedPassword = await bcrypt.hash(dto.password,10);

           const newUser= await this.prisma.user.update({
                where:{
                    email:dto.email
                },
                data:{
                    password:newHashedPassword

                }
            });

            return{
                message:"User Updated Successfully",
                newUser
            }

            
        } catch (error) {
            throw new ForbiddenException(error.message)
            
        }

    }
 
}
