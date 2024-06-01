import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [UserModule, AuthModule, PrismaModule,ConfigModule.forRoot({isGlobal:true}), WalletModule],
 
})
export class AppModule {}
