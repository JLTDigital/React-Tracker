import { useState } from 'react'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import type { Habit } from './components/HabitList'
import { isSameDay } from 'date-fns'

const App = () => {
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
    <div className='max-w 2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm addHabit={addHabit} deleteHabit={deleteHabit} />
      <HabitList
        habits={habits}
        deleteHabit={deleteHabit}
        toggleHabit={toggleHabit}
      />
    </div>
  )
}

export default App
