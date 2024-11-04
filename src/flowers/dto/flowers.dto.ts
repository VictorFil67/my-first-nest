import { IsNumber, IsString } from 'class-validator';

export class CreateFlowersDto {
  @IsString({
    message: 'Name is not a string!',
  })
  name: string;
  @IsString()
  color: string;
  @IsNumber()
  price: number;
}

export type TUpdateFlowersDto = Partial<CreateFlowersDto>; // utilize type FlowersCreateDto for update (Partial lets us not use all the properties, only part of the properties)
