import { IsEmail, IsNotEmpty, IsString} from "class-validator"
//import { IsNotEmpty, IsString } from "class-validator/types/decorator/decorators"

export class AuthDto {
    @IsEmail()
    @IsNotEmpty()
    email: String

    @IsString()
    @IsNotEmpty()
    password: String
}