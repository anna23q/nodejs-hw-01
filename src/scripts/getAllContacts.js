import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  return await readContacts();
};

// =============================== варіант 1 ===============================

// console.log(await getAllContacts());
console.log(Array.isArray(await getAllContacts()));

// =============================== /варіант 1 ===============================

// =============================== варіант 2 ===============================
// const getArrContacts = async () => {
//   const arrContacts = await getAllContacts();
//   console.log(arrContacts);
// };


// getArrContacts();
// =============================== /варіант 2 ===============================


// =============================== варіант 3 ===============================


// getAllContacts()
//   .then(console.log(`Done`))
//   .catch(console.log(console.error(`It is a mistake`)));


// =============================== /варіант 3 ===============================