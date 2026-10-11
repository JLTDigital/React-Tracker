import { parseISO, parseJSON } from 'date-fns'
import { useEffect, useState } from 'react'

export const useLocalStorage = <T>(key: string, inititalValue: T) => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      if (item == null) {
        return inititalValue
      } else {
        return JSON.parse(item, dateReviver)
      }
    } catch (error) {
      return inititalValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue))
  }, [storedValue, key])

  return [storedValue, setStoredValue] as const
}

const dateReviver = (_key: string, value: unknown) => {
  if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T/.test(value)) {
    return parseISO(value)
  }
  return value
}
