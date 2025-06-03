import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BeersModule } from './beers/beers.module';
import { BreweryModule } from './brewery/brewery.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    BeersModule,
    UsersModule,
    DatabaseModule,
    BreweryModule,
    CartModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
