import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { LocalStorageKeys } from '@/utils/localStorageKeys';

interface InitialContextProps {
  isChatOn: boolean;
  setIsChatOn: Dispatch<SetStateAction<boolean>>;
}

const initialContextProps: InitialContextProps = {
  isChatOn: true,
  setIsChatOn: () => null,
};

const AddonsContext = createContext<InitialContextProps>(initialContextProps);

export const useAddonsContext = () => useContext<InitialContextProps>(AddonsContext);

export const AddonsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isChatOn, setIsChatOn] = useState(true);

  useEffect(() => {
    const isChatVisible = localStorage.getItem(LocalStorageKeys.TwitchChatVisible);
    if (isChatVisible !== null) setIsChatOn(JSON.parse(isChatVisible));

    localStorage.setItem(LocalStorageKeys.TwitchChatVisible, JSON.stringify(true));
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.TwitchChatVisible, JSON.stringify(isChatOn));
  }, [isChatOn]);

  const value = useMemo(
    () => ({
      isChatOn,
      setIsChatOn,
    }),
    [isChatOn, setIsChatOn]
  );

  return <AddonsContext.Provider value={value}>{children}</AddonsContext.Provider>;
};
