import create from 'zustand';
import type { AuthStore } from '../model/App.model';

export const useAuthStore = create<AuthStore>((set, get) => ({
  session: null,
  setSession: (session) => set({ session }),
  sessionStatus: 'loading',
  setSessionStatus: (sessionStatus) => set({ sessionStatus }),
  currentUser: {
    id: undefined,
    isAdmin: undefined,
    name: undefined,
    email: undefined,
    image: undefined,
  },
  setCurrentUser: (currentUser) => set({ currentUser }),
  isAuthChanging: false,
  setIsAuthChanging: (isAuthChanging) => set({ isAuthChanging }),
  isLoggedIn: () => {
    const { sessionStatus, session } = get();

    return sessionStatus === 'authenticated' && session !== null;
  },
  isAdmin: () => {
    const { isLoggedIn, currentUser } = get();

    if (!isLoggedIn() || !currentUser || currentUser.isAdmin === undefined) {
      return false;
    }
    return isLoggedIn() && currentUser.isAdmin;
  },
  isAuthLoading: () => {
    const { sessionStatus } = get();

    return sessionStatus === 'loading';
  },
}));
