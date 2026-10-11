import { useHabits } from '../context/HabitProvider'
import HabitItem from './HabitItem'

interface HabitListProps {
  visibleDates: Date[]
}

const HabitList = ({ visibleDates }: HabitListProps) => {
  const { habits } = useHabits()

  if (habits.length === 0) {
    return (
      <p className='text-zinc-500 text-center py-12'>
        No habits yet. Add one above to get started.
      </p>
    )
  }

  return (
    <div className='flex flex-col gap-3'>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} visibleDates={visibleDates} />
      ))}
    </div>
  )
}

export default HabitList
