import type { IUserGlobalStore } from '@/store/types';
import type { IUser } from '@/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useUserGlobalStore = create<IUserGlobalStore>()(
  persist(
    (set, get) => ({
      user: null,
      updateUser: user => set({ user }),
      resetUser: () => set({ user: null }),
    }),
    {
      name: 'todomo-app-user-store',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export default useUserGlobalStore;
