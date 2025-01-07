import { IsEmail, IsEnum, IsNotEmpty, IsString} from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;

    @IsEnum(["ADMIN", "USER"], {
        message: 'Valid role required'
    })
    role: "ADMIN" | "USER";
}