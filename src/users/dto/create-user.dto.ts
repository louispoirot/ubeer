import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsEnum(["USER", "ADMIN"], {
        message: 'Valid role required'
    })
    @IsNotEmpty()
    @IsString()
    role: "USER" | "ADMIN"
}