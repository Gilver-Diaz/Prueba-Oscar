import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Coin } from './Coin.intity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  phoneNumber: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: 5 })
  balance: number;

  @OneToMany(() => Coin, (coin) => coin.sender)
  sentCoins: Coin[];

  @OneToMany(() => Coin, (coin) => coin.receiver)
  receivedCoins: Coin[];
}
