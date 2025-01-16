import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, IsUrl } from "class-validator";

export class CreateBeerDto {

    @ApiProperty({
        description: 'Nom de la bière',
        example: 'IPA blonde',
    })
    @IsNotEmpty()
    @IsString()
    beer: string;

    @ApiProperty({
        description: 'Prix de la bière',
        example: 4.5,
    })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        description: 'ID de la brasserie associée',
        example: 2,
    })
    @IsNotEmpty()
    @IsNumber()
    brewery_id: number;

    @ApiProperty({
        description: 'URL de l\'image de la bière',
        example: 'https://example.com/beer.wepb',
    })
    @IsNotEmpty()
    @IsUrl()
    imageUrl: string;
}