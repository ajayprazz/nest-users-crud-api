import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class UserValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const groups = [];

    if (value.modeOfContact === 'phone') {
      groups.push('phoneRequired');
    }

    if (value.modeOfContact === 'email') {
      groups.push('emailRequired');
    }

    if (value.modeOfContact === 'none') {
      groups.push('none');
    }

    const object = plainToClass(metatype, value);
    const errors = await validate(object, { groups });
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
