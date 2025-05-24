import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  const countContact = await readContacts();

  return countContact.length;
};


console.log(await countContacts());
