import Button from './Button'
import {
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isFuture
} from 'date-fns'

const HabitItem = ({ habit }: HabitItemProps) => {
  const visibleDates = eachDayOfInterval({
    start: startOfWeek(new Date(), { weekStartsOn: 1 }),
    end: endOfWeek(new Date(), { weekStartsOn: 1 })
  })

  return (
    <div className='rounded-xl bg-zinc-800 p-4 flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <span className='font-medium'>{habit.name}</span>
          <span className='text-amber-400 text-sm'>🔥 3</span>
        </div>
        <Button className='text-sm' variant='ghost-destructive'>
          Delete
        </Button>
      </div>
      <div className='flex gap-1.5'>
        {visibleDates.map((date) => (
          <Button
            className='flex flex-1 flex-col items-center gap-0.5 rounded-lg text-xs'
            disabled={isFuture(date)}
            key={date.toISOString()}>
            <span className='font-medium'>{format(date, 'EEE')}</span>
            <span>{format(date, 'd')}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default HabitItem

type Habit = { id: string; name: string }

interface HabitItemProps {
  habit: Habit
}
