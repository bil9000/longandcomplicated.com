// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, File } = initSchema(schema);

export {
  User,
  File
};