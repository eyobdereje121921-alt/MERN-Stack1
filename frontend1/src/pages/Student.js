import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

// components
import WorkoutDetails from "../components/WorkoutDetails"


const Student = () => {
  const { workouts, dispatch } = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [dispatch])

  return (
    <div>
      
          <tr>
            <td><p><strong>First Name: </strong></p></td>
            <td><p><strong>Last Name: </strong></p></td>
            <td><p><strong>Phone Number: </strong></p></td>
            <td><p><strong>Course: </strong></p></td>
          </tr>
       
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map(workout => (
          <WorkoutDetails workout={workout} key={workout._id} />
        ))}
      </div>
    </div></div>
  )
}

export default Student;