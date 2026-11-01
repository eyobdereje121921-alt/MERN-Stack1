import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <div className="workout-details">
      <table>
        <tbody>
          <tr>
            <td><p>{workout.firstName}</p></td>
            <td><p>{workout.lastName}</p></td>
            <td><p>{workout.phoneNumber}</p></td>
            <td><p>{workout.course}</p></td>
            <td><p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p></td>
          </tr>
        </tbody>
      </table>
      
      <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
    </div>
  )
}

export default WorkoutDetails