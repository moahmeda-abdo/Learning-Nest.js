import { IsNumber, IsOptional, IsString, Max, Min } from "class-validator";



export class CreateDto {

    @IsString()
    name: string

    @IsNumber()
    @Min(0)
    @Max(100)
    age: number

    @IsString()
    breed: string
    
}

export class UpdateDto {

    @IsString()
    @IsOptional()
    name?: string

    @IsNumber()
    @Min(0)
    @Max(100)
    @IsOptional()
    age?: number

    @IsString()
    @IsOptional()
    breed: string

}