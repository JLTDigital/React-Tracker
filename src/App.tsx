import { useState } from 'react'
import Header from './components/Header'
import HabitForm from './components/HabitForm'
import HabitList from './components/HabitList'
import type { Habit } from './components/HabitList'

const App = () => {
  const [habits, setHabits] = useState<Habit[]>([])

  const addHabit = (name: string) => {
    setHabits((curr) => [...curr, { id: crypto.randomUUID(), name }])
  }

  const deleteHabit = (id: string) => {
    setHabits((curr) => curr.filter((h) => h.id !== id))
  }

  return (
    <div className='max-w 2xl mx-auto p-4 flex flex-col gap-4'>
      <Header />
      <HabitForm addHabit={addHabit} deleteHabit={deleteHabit} />
      <HabitList habits={habits} deleteHabit={deleteHabit} />
    </div>
  )
}

export default App
