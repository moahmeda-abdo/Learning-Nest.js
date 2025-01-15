import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
    async update(@Param('id') id: string, @Body() data: Cat) {
        return this.catsService.update(id, data);
    }

    @Post()
    @UsePipes(new ValidationPipe({ whitelist: true , forbidNonWhitelisted: true }))
    async create(@Body() data: Cat) {
        return this.catsService.create(data);
    }

    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string) {
        return this.catsService.delete(id);
    }
}
