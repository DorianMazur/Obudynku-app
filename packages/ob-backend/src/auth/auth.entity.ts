import { Entity, Column, BeforeInsert, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class AuthEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  identificator: string;
  @Column({
    type: 'mediumint',
    nullable: false,
  })
  code: number;
  @Column('datetime')
  date: Date;
  @BeforeInsert() async insertDate() {
    this.date = new Date();
  }
}
