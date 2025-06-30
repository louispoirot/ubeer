import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BeersModule } from './beers/beers.module';
import { BreweryModule } from './brewery/brewery.module';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ConfigModule } from '@nestjs/config';
import { StripeService } from './stripe/stripe.service';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [
    BeersModule,
    UsersModule,
    DatabaseModule,
    BreweryModule,
    CartModule,
    StripeModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    StripeModule,
  ],
  controllers: [],
  providers: [StripeService],
})
export class AppModule { }
