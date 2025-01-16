import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateBeerDto {

    @IsNotEmpty()
    @IsString()
    beer: string;

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    price: number;

    @IsNotEmpty()
    @IsNumber()
    brewery_id: number;

    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;
}