import { create } from 'zustand';
import { Product } from '@/types/product';

interface EnquiryStore {
  items: Product[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  clearItems: () => void;
}

export const useEnquiryStore = create<EnquiryStore>((set) => ({
  items: [],
  addItem: (product) => 
    set((state) => ({
      items: state.items.some(item => item.id === product.id) 
        ? state.items 
        : [...state.items, product]
    })),
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    })),
  clearItems: () => set({ items: [] }),
}));