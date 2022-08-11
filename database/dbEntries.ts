import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry, IEntry } from '../models';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
  if (!isValidObjectId(id)) return null;

  await db.connect();
  // Con lean se cargan muchos menos datos al entry
  const entry = await Entry.findById(id).lean();
  await db.disconnect();

  return JSON.parse(JSON.stringify(entry));
  //return entry; no funciona por la seralizacion
};
