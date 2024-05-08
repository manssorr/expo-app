import type { IUserGlobalStore } from '@/store/types';
import type { IUser } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserGlobalStore = create<IUserGlobalStore>()(
  persist((set, get) => ({
    user: null,
    updateUser: (user: IUser) => set({ user }),
  })),
  {
    name: 'todomo-app-user-store',
    storage: createJSONStorage(() => AsyncStorage),
  },
);
