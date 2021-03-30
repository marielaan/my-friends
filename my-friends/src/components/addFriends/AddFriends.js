import React from 'react';
import { connect } from 'react-redux';
import {addFriends} from '../../actions';

const AddFriends = ({addFriends, amigos }) =>{
 const [amigo, setAmigo] = React.useState({
     name: '',
     phone: '',
     email: ''
 })

 function handleSubmit(e){
     e.preventDefault();
     addFriends(amigo)
     setAmigo({
      name: '',
      phone: '',
      email: ''
     })
 }

 function handleOnChange(event){
     setAmigo({

            ...amigo,
            [event.target.name] : event.target.value
        })
     
 }



    return(
        <form className="form-floating mt-5 ms-5 me-5" onSubmit={handleSubmit}>
  <div className="form-floating mb-3">
  <input value={amigo.name} name="name" type="text" className="form-control" id="name" placeholder="Friends name" onChange={handleOnChange}/>
  <label htmlfor="name">Friends name</label>
</div>
<div className="form-floating mb-3">
  <input value={amigo.phone} name="phone" type="text" className="form-control" id="phone" placeholder="Friends phone" onChange={handleOnChange}/>
  <label htmlfor="phone">phone</label>
</div>
<div className="form-floating mb-3">
  <input value={amigo.email} name="email" type="email" className="form-control" id="email" placeholder="name@example.com" onChange={handleOnChange}/>
  <label htmlfor="email">Email address</label>
</div>
<div className="col-auto">
    <button type="submit" className="btn btn-success mb-3">Save friend</button>
  </div>
</form>
    )
}

// const mapDispatchToProps = (dispatch) =>{
//   return{
//     guardarAmigo: friend => dispatch(addFriend(friend))
//   }
// }

const mapStateToProps = (state) =>{
  return{
    amigos : state
  }
}



// export default connect(null, mapDispatchToProps) (AddFriends);
export default connect(mapStateToProps, {addFriends}) (AddFriends);