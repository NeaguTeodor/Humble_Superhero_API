import { Body, Controller, Get, Post } from '@nestjs/common';
import { SuperheroesService } from './superheroes.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';
import { Superhero } from './superheroes.interface';

@Controller('superheroes')
export class SuperheroesController {
  constructor(private readonly superheroesService: SuperheroesService) {}

  @Post()
  create(@Body() createSuperheroDto: CreateSuperheroDto): Superhero {
    return this.superheroesService.create(createSuperheroDto);
  }

  @Get()
  findAll(): Superhero[] {
    return this.superheroesService.findAll();
  }
}
