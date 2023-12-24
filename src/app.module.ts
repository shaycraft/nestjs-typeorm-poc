// NestJs
import { Module } from '@nestjs/common';

// TypeORM
import { TypeOrmModule } from '@nestjs/typeorm';

// controllers
import { AppController } from './app.controller';

// services
import { AppService } from './app.service';

// entities
import { User } from './entities/user';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'changeme',
      database: 'postgres',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
