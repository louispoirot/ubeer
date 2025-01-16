import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive } from "class-validator";

export class CreateCartDto {

    @ApiProperty({
        description: 'ID de l\'utilisateur',
        example: 1,
    })
    @IsNotEmpty()
    @IsNumber()
    user_id: number;

    @ApiProperty({
        description: 'ID de la bière',
        example: 5,
    })
    @IsNotEmpty()
    @IsNumber()
    beer_id: number;

    @ApiProperty({
        description: 'Quantité de bière dans le panier',
        example: 3,
    })
    @IsPositive()
    @IsNotEmpty()
    @IsNumber()
    quantity: number;

}