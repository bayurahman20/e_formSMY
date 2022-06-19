import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { M_Participant as Participant } from './model/participant/user.participant';
import { ParticipantModule } from './participant/participant.module';
import { ParticipantController } from './participant/participant.controller';
import { ParticipantService } from './participant/participant.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'localdb',
      password: '1q2w3e4r',
      database: 'e_form',
      entities: [Participant],
      synchronize: true,
    }),
    ParticipantModule,
  ],
  controllers: [AppController, ParticipantController],
  providers: [AppService, ParticipantService],
})
export class AppModule {}
