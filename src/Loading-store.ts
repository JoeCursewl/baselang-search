import { create } from 'zustand';
import { getCookie } from './services/getCookie';

const token = getCookie('authToken');
export const useLoadingStore = create((set, get) => ({
    isLoading: false,
    API_URL: 'https://sng6d9gt-8080.use2.devtunnels.ms/',
    authToken: token !== '' ? token : null,
    setIsLoading: (bool: boolean) => {
        set({ isLoading: bool });
    },
    setAuthToken: (token: string) => {
        set({ authToken: token });
    }
}))
