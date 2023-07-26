import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRoles } from './modules/roles/user-roles.model';
import { Role } from './modules/roles/roles.model';
import { User } from './modules/users/users.model';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: './utilities.sqlite',
      models: [User, Role, UserRoles],
      autoLoadModels: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
