import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsString, Length, Matches } from "class-validator";

export class CreateUserDto {

    @ApiProperty({
        description: 'Nom de l\'utilisateur',
        example: 'Jacques Chirac',
    })
    @IsNotEmpty()
    @IsString()
    @Length(3,50)
    name: string;

    @ApiProperty({
        description: 'Mot de passe de l\'utilisateur',
        example: 'azerty',
    })
    @IsNotEmpty()
    @IsString()
    @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, {
        message: 'Password must contain at least 8 characters, including letters and numbers'
    })
    password: string;

    @ApiProperty({
        description: 'Adresse email valide',
        example: 'jacqueschirac@exemple.com',
    })
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @ApiProperty({
        description: 'Rôle de l\'utilisateur (USER ou ADMIN)',
        example: 'USER',
        enum: ['USER', 'ADMIN'],
    })
    @IsEnum(["USER", "ADMIN"], {
        message: 'Valid role required (USER OR ADMIN)'
    })
    @IsNotEmpty()
    @IsString()
    role: "USER" | "ADMIN"
}