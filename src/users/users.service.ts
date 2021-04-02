import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import { parseAsync } from 'json2csv';
import { nanoid } from 'nanoid';
import { User } from './user.model';

@Injectable()
export class UsersService {
  async addUser(
    name: string,
    gender: string,
    phone: string,
    email: string,
    address: string,
    nationality: string,
    dob: string,
    educationBackground: string,
    modeOfContact: string,
  ) {
    const newUser = new User(
      nanoid(),
      name,
      gender,
      phone,
      email,
      address,
      nationality,
      dob,
      educationBackground,
      modeOfContact,
    );

    const fields = [
      'id',
      'name',
      'gender',
      'phone',
      'email',
      'address',
      'nationality',
      'dob',
      'educationBackground',
      'modeOfContact',
    ];

    const opts = { fields, header: true };

    const newLine = '\n';

    try {
      await fs.stat(__dirname + '/../../src/db/users.csv');

      //avoid appending header if file already exisits
      opts.header = false;

      try {
        const updatedCsv = (await parseAsync(newUser, opts)) + newLine;

        (await fs.appendFile(
          __dirname + '/../../src/db/users.csv',
          updatedCsv,
        )) + newLine;
      } catch (err) {
        throw new Error(err.message);
      }
    } catch (err) {
      console.log(err);
      console.log('file dowsnot exists');
      //file doesnot exists
      try {
        const updatedCsv = (await parseAsync(newUser, opts)) + newLine;

        fs.writeFile(__dirname + '/../../src/db/users.csv', updatedCsv);
      } catch (err) {
        throw new Error(err.message);
      }
    }
  }
}
