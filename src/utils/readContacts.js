import { PATH_DB } from '../constants/contacts.js';
import * as fs from 'node:fs/promises';
// import { createFakeContact } from './createFakeContact.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });

    const contacts = JSON.parse(data);
    console.log(contacts);
    return contacts;
  } catch (error) {
    console.log('it`s a mistake contacts', error.message);
    return [];
  }
};


// readContacts();
