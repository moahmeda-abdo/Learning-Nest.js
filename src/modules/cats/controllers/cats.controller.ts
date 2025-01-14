import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CatsService } from '../services/cats.service';
import { Cat } from '../interfaces/cats.interface';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        return this.catsService.findOne(id);
    }

    @Patch('/:id')
    async update(@Param('id') id: string , @Body() data :any) {
        return this.catsService.update(id , data);
    }

    @Post()
    async create(@Body() data :any) {
        return this.catsService.create(data );
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) {
        return this.catsService.delete(id);
    }
}
