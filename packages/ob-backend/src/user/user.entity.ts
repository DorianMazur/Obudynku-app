import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert } from 'typeorm';

import { hash } from 'bcrypt';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @Column({
    type: 'varchar',
    nullable: true,
  })
  phone: string;
  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  email: string;
  @Column({
    type: 'varchar',
    nullable: false,
  })
  password: string;
  @BeforeInsert() async hashPassword() {
    this.password = await hash(this.password, 10);
  }
}
