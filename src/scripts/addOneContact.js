import {readContacts} from '../../src/utils/readContacts.js';
import {createFakeContact} from '../../src/utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
export const addOneContact = async () => {
  const contacts=await readContacts();
  const newContact=createFakeContact();
await writeContacts ([...contacts,newContact]);
};

addOneContact();
