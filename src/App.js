import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Meeting at School',
            day: 'March 15th at 12:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Food Shopping',
            day: 'March 17th at 10:30am',
            reminder: false,
        }
    ]
)

  return (
    <div className='container'>
        <Header title='Task Tracker!' />
        <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
