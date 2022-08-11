import { FC, useReducer, PropsWithChildren, useEffect } from 'react';

import { entriesApi } from '../../apis';
import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps extends PropsWithChildren<{}> {}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: '[Entry] Add-Entry', payload: data });

    //   const NewEntry: Entry = {
    //     _id: uuidv4(),
    //     description,
    //     createdAt: Date.now(),
    //     status: 'pending',
  };

  const updateEntry = async (entry: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${entry._id}`, {
        description: entry.description,
        status: entry.status,
      });

      dispatch({ type: '[Entry] Entry-Updated', payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  // Si quisieramos mandar esta funcion como dependencia en el effect
  // se deberia grabar antes en memoria
  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] Refresh-Data', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        //Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
