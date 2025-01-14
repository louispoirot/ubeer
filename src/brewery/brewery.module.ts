import { Module } from '@nestjs/common';
import { BreweryService } from './brewery.service';
import { BreweryController } from './brewery.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [BreweryController],
  providers: [BreweryService],
})
export class BreweryModule {}
