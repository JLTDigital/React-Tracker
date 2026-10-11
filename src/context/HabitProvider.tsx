import { isSameDay } from 'date-fns'
import { createContext, type ReactNode, useState, useContext } from 'react'

export const HabitContext = createContext<Context | null>(null)

const HabitProvider = ({ children }: HabitProviderProps) => {
  const [habits, setHabits] = useState<Habit[]>([])

  const addHabit = (name: string) => {
    setHabits((curr) => [
      ...curr,
      { id: crypto.randomUUID(), name, completions: [] }
    ])
  }

  const deleteHabit = (id: string) => {
    setHabits((curr) => curr.filter((h) => h.id !== id))
  }

  const toggleHabit = (id: string, date: Date) => {
    setHabits((curr) =>
      curr.map((h) => {
        if (h.id !== id) return h

        const alreadyDone = h.completions.some((c) => isSameDay(c, date))
        const completions = alreadyDone
          ? h.completions.filter((c) => !isSameDay(c, date))
          : [...h.completions, date]

        return { ...h, completions }
      })
    )
  }

  return (
    <HabitContext.Provider
      value={{ habits, addHabit, toggleHabit, deleteHabit }}>
      {children}
    </HabitContext.Provider>
  )
}

export function useHabits() {
  const habitContext = useContext(HabitContext)
  if (habitContext == null) throw new Error('Null Context')
  return habitContext
}

export type Habit = { id: string; name: string; completions: Date[] }

interface Context {
  habits: Habit[]
  addHabit: (name: string) => void
  deleteHabit: (id: string) => void
  toggleHabit: (id: string, date: Date) => void
}

interface HabitProviderProps {
  children: ReactNode
}

export default HabitProvider
