import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class M_Participant {
  @PrimaryGeneratedColumn('uuid')
  id_participant: string;

  @Column('varchar', { length: 50 })
  participan_name: string;

  @Column('varchar', { length: 150 })
  participan_address: string;

  @Column('varchar', { length: 12 })
  participant_contact: string;

  @Column('varchar', { length: 3 })
  participant_height: string;

  @Column('varchar', { length: 3 })
  participant_weight: string;

  @Column('varchar', { length: 2 })
  participant_age: string;

  @Column('varchar', { length: 50 })
  participant_school_origin: string;

  @Column('varchar', { length: 10 })
  participant_code: string;
}
