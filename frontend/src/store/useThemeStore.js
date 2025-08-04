import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("connectora-theme")||"coffee",
  setTheme: (theme)=>{
    localStorage.setItem("connectora-theme",theme)
    set({theme})
  }
}))