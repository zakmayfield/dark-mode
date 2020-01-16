import {  useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
  const [newValue, setNewValue] = useLocalStorage('DARK_MODE')

  useEffect(() => {
    if(newValue){
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [newValue])

  return [newValue, setNewValue]
}