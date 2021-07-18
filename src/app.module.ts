import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { EventsRepository } from './events/events.repository';

@Module({
  imports: [
    EventsModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './app.db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([EventsRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
