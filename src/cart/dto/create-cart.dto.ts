import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateCartDto {

    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @IsNotEmpty()
    @IsNumber()
    beer_id: number;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

}