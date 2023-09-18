import { BuildingEntity } from '../building/building.entity';
import { IOpinion } from '../types/Rates';
import {
  Entity,
  Column,
  BeforeInsert,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

@Entity('opinion')
export class OpinionEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  flat_number: string;
  @Column({
    type: 'simple-json',
    nullable: false,
  })
  opinions: IOpinion;

  @Column({
    type: 'mediumint',
    nullable: false,
  })
  construction: number;
  @Column({
    type: 'mediumint',
    nullable: false,
  })
  localization: number;
  @Column({
    type: 'mediumint',
    nullable: false,
  })
  safety: number;
  @Column({
    type: 'mediumint',
    nullable: false,
  })
  acustic: number;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  status: string;

  @Column({
    type: 'varchar',
    nullable: false,
  })
  user_id: string;

  @Column({
    type: 'varchar',
    nullable: true,
  })
  year: string;

  @Column({
    type: 'varchar',
    length: 500,
    nullable: true,
  })
  advice: string;

  @Column('datetime')
  created_date!: Date;
  @BeforeInsert() async insertDate() {
    this.created_date = new Date();
  }

  @Column('datetime')
  updated_date!: Date;

  @ManyToOne(() => BuildingEntity, (building) => building.opinions)
  building: BuildingEntity;
}
