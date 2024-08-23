import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Coin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  message: string;

  @Column()
  amount: number;

  @ManyToOne(() => User, (user) => user.sentCoins, { eager: false })
  sender: User;

  @Column()
  senderId: number;

  @ManyToOne(() => User, (user) => user.receivedCoins, { eager: false })
  receiver: User;

  @Column()
  receiverId: number;
}
