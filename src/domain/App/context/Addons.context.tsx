import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Language } from '@/translations/i18n';
import i18n, { LanguageEnum } from '@/translations/i18n';

import { LocalStorageKeys } from '../model/App.model';

interface InitialContextProps {
  isPlaylistOn: boolean;
  setIsPlaylistOn: Dispatch<SetStateAction<boolean>>;
  isChatOn: boolean;
  setIsChatOn: Dispatch<SetStateAction<boolean>>;
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}

const initialContextProps: InitialContextProps = {
  isPlaylistOn: true,
  setIsPlaylistOn: () => null,
  isChatOn: false,
  setIsChatOn: () => null,
  language: LanguageEnum.PL,
  setLanguage: () => null,
};

const AddonsContext = createContext<InitialContextProps>(initialContextProps);

export const useAddonsContext = () => useContext<InitialContextProps>(AddonsContext);

export const AddonsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isChatOn, setIsChatOn] = useState(false);
  const [isPlaylistOn, setIsPlaylistOn] = useState(true);
  const [language, setLanguage] = useState<Language>(LanguageEnum.PL);

  useEffect(() => {
    const isChatVisible = localStorage.getItem(LocalStorageKeys.TwitchChatVisible);
    if (isChatVisible !== null) {
      setIsChatOn(JSON.parse(isChatVisible));
      return;
    }

    localStorage.setItem(LocalStorageKeys.TwitchChatVisible, JSON.stringify(false));
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.TwitchChatVisible, JSON.stringify(isChatOn));
  }, [isChatOn]);

  useEffect(() => {
    const isPlaylistVisible = localStorage.getItem(LocalStorageKeys.PlaylistVisible);
    if (isPlaylistVisible !== null) {
      setIsPlaylistOn(JSON.parse(isPlaylistVisible));
      return;
    }

    localStorage.setItem(LocalStorageKeys.PlaylistVisible, JSON.stringify(true));
  }, []);

  useEffect(() => {
    localStorage.setItem(LocalStorageKeys.PlaylistVisible, JSON.stringify(isPlaylistOn));
  }, [isPlaylistOn]);

  useEffect(() => {
    const isLanguageAvailable = localStorage.getItem(LocalStorageKeys.Language);
    if (isLanguageAvailable !== null) {
      setLanguage(JSON.parse(isLanguageAvailable));
      return;
    }

    localStorage.setItem(LocalStorageKeys.Language, JSON.stringify(LanguageEnum.PL));
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem(LocalStorageKeys.Language, JSON.stringify(language));
  }, [language]);

  const value = useMemo(
    () => ({
      isChatOn,
      setIsChatOn,
      isPlaylistOn,
      setIsPlaylistOn,
      language,
      setLanguage,
    }),
    [isChatOn, setIsChatOn, language, setLanguage, isPlaylistOn, setIsPlaylistOn]
  );

  return <AddonsContext.Provider value={value}>{children}</AddonsContext.Provider>;
};
