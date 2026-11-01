import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [course, setCourse] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {firstName, lastName, phoneNumber, course}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setEmptyFields([])
      setError(null)
      setFirstName('')
      setLastName('')
      setPhoneNumber('')
      setCourse('')
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Register</h3>

      <label>First Name:</label>
      <input 
        type="text" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName}
        className ={emptyFields.includes('firstName') ? 'error' : ''}
      />

      <label>Last Name:</label>
      <input 
        type="text" 
        onChange={(e) => setLastName(e.target.value)} 
        value={lastName}
        className={emptyFields.includes('lastName') ? 'error' : ''}
      />

      <label>Phone Number:</label>
      <input 
        type="text" 
        onChange={(e) => setPhoneNumber(e.target.value)} 
        value={phoneNumber}
        className={emptyFields.includes('phoneNumber') ? 'error' : ''}
      />

      <label>Course:</label>
      <input 
        type="text" 
        onChange={(e) => setCourse(e.target.value)} 
        value={course}
        className={emptyFields.includes('course') ? 'error' : ''}
      />

      <button>Register</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm