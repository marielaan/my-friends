import {Link} from 'react-router-dom';


const NavBar = () =>{
    return(
        <nav className="navbar navbar-light bg-info">
  <div className="container-fluid">
    <Link to='/' className="navbar-brand text-white">My Friends</Link>
      <Link to='/add' className="btn btn-success" type="submit">Add Friends</Link>
   
  </div>
</nav>
    )
}

export default NavBar;
    
     