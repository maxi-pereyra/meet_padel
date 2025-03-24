import * as SecureStore from 'expo-secure-store';

export const saveSecurely = async (key: string, value: string) => {
    try {
        const jsnValue = JSON.stringify(value);
        await SecureStore.setItemAsync(key,value);
    } catch (error) {
        throw error
    }
}

export const fetchSecurity =  async (key: string) => {
   return await SecureStore.deleteItemAsync(key)
}