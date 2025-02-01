import { Injectable } from '@nestjs/common';
import { Superhero } from './superheroes.interface';

@Injectable()
export class SuperheroesService {
  private superheroes: Superhero[] = [];

  create(superhero: Superhero): Superhero {
    this.superheroes.push(superhero);
    return superhero;
  }

  findAll(): Superhero[] {
    console.log('superheroes', this.superheroes)
    return this.superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
  }
}
