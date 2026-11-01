import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/student">
          <h1>Student list</h1>
        </Link>
        <Link to="/register">
          <h1>Register</h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar