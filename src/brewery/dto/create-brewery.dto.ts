import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBreweryDto {

    @ApiProperty({
        description: 'Le nom de la brasserie',
        example: 'Trois brasseurs',

    })
    @IsNotEmpty()
    @IsString()
    name: string;
}