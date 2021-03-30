import NavBar from "./components/Nav/NavBar";
import AddFriends from './components/addFriends/AddFriends';
import Home from './components/Home/Home';

import { Route} from 'react-router-dom';
import AmigoDetail from "./components/AmigoDetail/AmigoDetail";



function App() {
  return (
    <>
     <NavBar/>
     <Route exact path='/add' component={AddFriends}/>
     <Route exact path='/' component={Home}/>
     <Route exact path='/edit/:id' component={AmigoDetail}/>
    </>
  );
}

export default App;
