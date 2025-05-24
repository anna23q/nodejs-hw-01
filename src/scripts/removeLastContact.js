import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeLastContact = async () => {
  const lastContact = await readContacts();

  if (lastContact.length === 0) {
    console.log(`Upps, we dont have contacts`);
    return;
  }

  lastContact.pop();

  await writeContacts(lastContact);
};


removeLastContact();