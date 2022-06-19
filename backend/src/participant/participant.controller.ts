import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common';
import { M_Participant as Participant } from 'src/model/participant/user.participant';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { ParticipantService } from './participant.service';

@Controller('participant')
export class ParticipantController {
  constructor(private participantService: ParticipantService) {}

  @Post()
  async create(@Body() participant: Participant) {
    return this.participantService.insertParticipantService(participant);
  }
}
