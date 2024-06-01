import { Injectable } from '@nestjs/common';
import { AuthDto } from 'src/auth/dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AmountDto, WalletDto } from './dto';

@Injectable()
export class WalletService {
    constructor(private prisma:PrismaService){}

    async getAllWallets(){
        try {
            const wallets = await this.prisma.wallet.findMany({});
            console.log(wallets)
            if(wallets.length===0){
                return{
                    message:"No Wallets Exist"
                }
            }
            return{
                message:"Wallets Fetched SuccessFully",
                wallets
            };
           
            
        } catch (error) {
            return{
                message:"Internal Server Error"
            }
            
        }
    }

    async CreateWallet(dto:WalletDto){
        try {
            const user = await this.prisma.user.findFirst({
                where:{
                    email:dto.email
                }
            });
            if(!user){
                return{
                    message:"User does not exist , please Register First",
                }
            };

            const wallet = await this.prisma.wallet.create({
                data:{
                    userId:user.id,
                    amount:dto.amount
                }
            });

            return {
                message:"Wallet Created Successfully",
                wallet
            }

        
            
        } catch (error) {
            return {
                message:error.message
            }
            
        }
    }
 async UpdateWallet(address:string , dto:AmountDto){
        try {
            const wallet = await this.prisma.wallet.findFirst({
                where:{
                    address:address
                    
                }
            });
          

            
            const newWallet = await this.prisma.wallet.update({
                where:{
                    address:address
                },
                data:{
                    id:wallet.id,
                    userId:wallet.userId,
                    address:wallet.address,
                    amount:dto.amount
                }
            });

            
            if(!newWallet){
                return{
                    message:"Wallet does not exist"
                }
            }

            return {
                message:"Amount Updated Successfully",
                newWallet
            }




            
            
        } catch (error) {
            return{
                message:error.message
            }
            
        }

    }

    async DeleteWallet(address:string){

        try {
            const wallet = await this.prisma.wallet.findFirst({
                where:{
                    address:address
                }
            });

            if(!wallet){
                return{
                    message:"Wallet Does Not exist"
                }
            };

            await this.prisma.wallet.delete({
                where:{
                    address:address
                }
            });

            return{
                message:"Wallet Deleted Successfully"
            }
            
        } catch (error) {
            return {
                message:error.message
            }
            
        }
    }

}
   
