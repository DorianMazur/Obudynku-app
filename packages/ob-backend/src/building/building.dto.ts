import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class SearchBuildingsDTO {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsOptional()
  @IsString()
  search: string;
}
