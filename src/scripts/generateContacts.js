import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const contacts = await readContacts();

  const newContacts = [];

  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updateContacts = [...contacts, ...newContacts];

  // ============== перевіряю, чи функція повертає Promise, Якщо Promise { <pending> } , значить, функція асинхронна і потрібно await ==============

  // console.log(writeContacts(updateContacts));
  await writeContacts(updateContacts);
};


generateContacts(5);
