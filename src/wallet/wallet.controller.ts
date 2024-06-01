import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { WalletService } from './wallet.service';
import { AmountDto, WalletDto } from './dto';

@Controller('wallet')
export class WalletController {
    constructor(private walletService:WalletService){}

    @Get('all')
    async GetAllWallets(){
        return this.walletService.getAllWallets();
    }

    @Post('create')
    async CreateWallet(@Body() dto:WalletDto){
        return this.walletService.CreateWallet(dto);
    }

    @Put('update/:address')
    async UpdateWallet(@Param('address') address:string , @Body() dto:AmountDto){
        return this.walletService.UpdateWallet(address,dto);
    }

    @Delete('delete/:address')
    async DeleteWallet(@Param('address') address:string){
        return this.walletService.DeleteWallet(address)
        
    }
    

    


}
