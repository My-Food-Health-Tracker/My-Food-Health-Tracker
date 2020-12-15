import React from 'react'
import {Link} from 'react-router-dom'
import {logout} from '../services/auth'

const handleLogout = props => {
  console.log(props);
  logout().then(() => {
    props.setUser(null);
  })
}

// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav>
//         <Link to="/signup" style={{'color': 'white'}}>Signup</Link>
//         <Link to="/login" style={{'color': 'white'}}>Login</Link>
//         <Link to='/' onClick={() => handleLogout(props)}>Logout</Link>
//       <ul>
//         <li><Link href="/" style={{'color': 'white'}}>Back to main </Link></li>
//         {/* <li><Link to="/usertest" style={{'color': 'white'}}>All users</Link></li> */}
//         <li><Link to="/historicaltest" style={{'color': 'white'}}>Historical data</Link></li>
//         <li><Link to="/adddays" style={{'color': 'white'}}>Add a day</Link></li>
//       </ul>
//       </nav>
//     )
//   }
// }

export default function Navbar(props) {
      return (
      <nav style={{color: 'blue'}}>
        <Link to="/signup">Signup</Link>
        <Link to="/login" >Login</Link>
        <Link to='/' onClick={() => handleLogout(props)}>Logout</Link>
      <ul>
        <li><Link to="/">Back to main </Link></li>
        {/* <li><Link to="/usertest" style={{'color': 'white'}}>All users</Link></li> */}
        <li><Link to="/historicaltest" >Historical data</Link></li>
        <li><Link to="/testinput" >Test input</Link></li>
        <li><Link to="/adddays" >Add a day</Link></li>
        <li><Link to="/usertest">View current user's data</Link></li>
      </ul>
      </nav>
    )
}
