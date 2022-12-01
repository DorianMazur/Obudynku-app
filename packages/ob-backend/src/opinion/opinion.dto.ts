import {
  IsNotEmpty,
  IsObject,
  IsNumber,
  IsString,
  IsOptional,
} from 'class-validator';
import { IOpinion, IRate } from '../types/Rates';

export class AddNewOpinionDTO {
  @IsOptional()
  flat_number: string;

  @IsOptional()
  advice: string;

  @IsOptional()
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsNumber()
  lat: number;

  @IsNotEmpty()
  @IsNumber()
  lon: number;

  @IsNotEmpty()
  @IsObject()
  rates: IRate;

  @IsNotEmpty()
  @IsObject()
  opinions: IOpinion;
}

export class EditOpinionDTO {
  @IsOptional()
  advice: string;

  @IsOptional()
  @IsString()
  year: string;

  @IsNotEmpty()
  @IsObject()
  rates: IRate;

  @IsNotEmpty()
  @IsObject()
  opinions: IOpinion;
}
