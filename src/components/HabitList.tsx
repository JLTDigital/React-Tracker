import HabitItem from './HabitItem'

const HabitList = ({ habits }: HabitListProps) => {
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
        <HabitItem key={habit.id} habit={habit} />
      ))}
    </div>
  )
}

export default HabitList

export type Habit = { id: string; name: string }

interface HabitListProps {
  habits: Habit[]
}
