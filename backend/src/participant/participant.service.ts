import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { M_Participant as Participant } from 'src/model/participant/user.participant';
import { Repository } from 'typeorm';

@Injectable()
export class ParticipantService {
  constructor(
    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,
  ) {}

  async insertParticipantService(
    participant: Participant,
  ): Promise<Participant> {
    try {
      const result = this.participantRepository.save(participant);
      return await result;
    } catch (error) {
      throw new Error(error);
    }
  }

  async findById(participantId: string): Promise<Participant> {
    try {
      const result = this.participantRepository.findBy({
        id_participant: participantId,
      });
      console.log(result);
      return null;
    } catch (error) {
      throw new Error(error);
    }
  }
}
