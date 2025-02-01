import { Module } from '@nestjs/common';
import { SuperheroesModule } from './superheroes/superheroes.module';
import { AppController } from './app.controller';

@Module({
  imports: [SuperheroesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
