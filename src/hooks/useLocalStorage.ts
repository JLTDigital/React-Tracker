import { useState } from 'react'

export const useLocalStorage = <T>(key: string, inititalValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      if (item == null) {
        return inititalValue
      } else {
        return JSON.parse(item)
      }
    } catch (error) {
      return inititalValue
    }
  })

  return [storedValue, setStoredValue] as const
}
