import {Link} from 'react-router-dom';


const NavBar = () =>{
    return(
        <nav class="navbar navbar-light bg-info">
  <div class="container-fluid">
    <Link to='/' class="navbar-brand text-white">My Friends</Link>
      <Link to='/add' class="btn btn-success" type="submit">Add Friends</Link>
   
  </div>
</nav>
    )
}

export default NavBar;
    
     