import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BeersModule } from './beers/beers.module';
import { BreweryModule } from './brewery/brewery.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    BeersModule,
    UsersModule,
    DatabaseModule,
    BreweryModule,
    CartModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
