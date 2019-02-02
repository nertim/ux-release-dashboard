import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
  Unique,
  ManyToOne,
} from 'typeorm';
import { DevOpsData } from './devops-data.entity';
import { GithubCommit } from './github-commits.entity';

@Entity()
@Unique(['name', 'version'])
export class FusionVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: string;

  @Column()
  name: string;

  @Column()
  version: string;

  @Column()
  prod: boolean;

  @ManyToOne(type => DevOpsData, build => build.versions, { cascade: true })
  @JoinColumn()
  devOpsData?: DevOpsData;

  @Column({ nullable: true })
  lastVersion?: string;

  @ManyToMany(type => GithubCommit, commit => commit.versions, {
    cascade: true,
  })
  @JoinTable()
  githubCommitData?: GithubCommit[];
}
