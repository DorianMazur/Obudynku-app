import { OpinionEntity } from '../opinion/opinion.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity('building')
export class BuildingEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  address: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  city: string;

  @Column({
    type: 'double',
    nullable: false,
    transformer: {
      to: (value: number) => value.toFixed(6),
      from: (value: number) => value,
    },
  })
  lat: number;

  @Column({
    type: 'double',
    nullable: false,
    transformer: {
      to: (value: number) => value.toFixed(6),
      from: (value: number) => value,
    },
  })
  lon: number;

  @OneToMany(() => OpinionEntity, (opinion) => opinion.building)
  opinions: OpinionEntity[];

  @Column({
    type: 'boolean',
    nullable: true,
  })
  hasImage: boolean;
}
