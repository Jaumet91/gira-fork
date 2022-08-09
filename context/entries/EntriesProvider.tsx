import { FC, useReducer, PropsWithChildren } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}

interface EntriesProviderProps extends PropsWithChildren<{}> {}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti vitae totam consectetur cupiditate, consequuntur doloremque, magni',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti',
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint corrupti vitae totam consectetur',
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
