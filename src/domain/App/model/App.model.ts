import type { SocketProvider } from '@/server/sockets';
import type { Session } from 'next-auth';

export enum LocalStorageKeys {
  PlayerVolume = 'player_volume',
  TwitchChatVisible = 'twitch_chat_visible',
  Language = 'language',
}

export interface SocketStore {
  socket: SocketProvider.ClientIO | null;
  setSocket: (socket: SocketProvider.ClientIO) => void;
  leader: SocketProvider.UserData | undefined;
  setLeader: (leader: SocketProvider.UserData) => void;
  isCurrentUserLeader: () => boolean;
}

export type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated';

export interface AuthStore {
  isUserUnauthenticated(): any;
  session: Session | null;
  setSession: (session: Session | null) => void;
  sessionStatus: SessionStatus;
  setSessionStatus: (sessionStatus: SessionStatus) => void;
  currentUser: UserSessionData;
  setCurrentUser: (currentUser: UserSessionData) => void;
  isAuthChanging: boolean;
  setIsAuthChanging: (authChange: boolean) => void;
  isLoggedIn: () => boolean;
  isAdmin: () => boolean;
  isAuthLoading: () => boolean;
}

export interface UserSessionData {
  id?: string | undefined;
  isAdmin?: boolean | undefined;
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}
