import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  employee_code!: string;

  @IsString()
  trade?: string;
}
