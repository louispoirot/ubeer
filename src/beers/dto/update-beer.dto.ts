import { CreateBeerDto } from "./create-beer.dto";
import { PartialType } from "@nestjs/swagger";

export class UpdateBeerDto extends PartialType(CreateBeerDto) { }