import create from 'zustand';
import type { SocketStore } from '../model/App.model';

export const useSocketStore = create<SocketStore>((set, get) => ({
  socket: null,
  setSocket: (socket) => set({ socket }),
  leader: undefined,
  setLeader: (leader) => set({ leader }),
  isCurrentUserLeader: () => {
    const { leader, socket } = get();
    return leader?.socketId === socket?.id;
  },
}));
