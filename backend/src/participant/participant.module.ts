import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { M_Participant as Participant } from 'src/model/participant/user.participant';
import { ParticipantController } from './participant.controller';
import { ParticipantService } from './participant.service';

@Module({
  imports: [TypeOrmModule.forFeature([Participant])],
  controllers: [ParticipantController],
  providers: [ParticipantService],
  exports: [TypeOrmModule],
})
export class ParticipantModule {}
