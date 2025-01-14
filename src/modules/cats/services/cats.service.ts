
import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { Cat } from '../interfaces/cats.interface';



@Injectable()
export class CatsService {
    constructor(@Inject('CAT_MODEL') private catModel: Model<Cat>,) { }

    async findAll(): Promise<Cat[]> {
        const cats = await this.catModel.find();

        if (!cats || cats.length === 0)  throw new HttpException('Cats not found', HttpStatus.NOT_FOUND);
    
        return cats;
    }

    async findOne(id: string): Promise<Cat> {
        const cat = await this.catModel.findById(id);

        if (!cat)  throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
        
        return cat;
    }

    async create(data : any): Promise<Cat> {
        const createdCat = new this.catModel(data);
        return createdCat.save();
    }

    async update(id: string, data: any): Promise<Cat> {
        const updatedCat = await this.catModel.findById(id);

        if(!updatedCat) throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);

        Object.assign(updatedCat, data);

        await updatedCat.save();

        return updatedCat;
    }

    async delete(id: string): Promise<Cat> {
        const cat = await this.catModel.findByIdAndDelete(id);

        if(!cat) throw new HttpException('Cat not found', HttpStatus.NOT_FOUND);
        
        return cat
    }
}
