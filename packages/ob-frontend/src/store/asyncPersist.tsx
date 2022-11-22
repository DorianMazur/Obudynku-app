import { StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';

export const asyncPersist = <T extends object>(
  config: StateCreator<T, [['zustand/persist', unknown]]>,
  options: any
) => {
  const { getStorage } = options;

  options.getStorage = () => {
    const { setItem, getItem, removeItem } = getStorage();

    return {
      setItem: async (...args: any) => setItem(...args),
      getItem: async (...args: any) => getItem(...args),
      removeItem: async (...args: any) => removeItem(...args),
    };
  };

  return persist<T>(config, options);
};
