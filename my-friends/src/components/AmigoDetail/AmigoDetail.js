import {connect} from 'react-redux';
import { deactivateFriends, blockFriends, deleteFriends} from '../../actions';

const AmigoDetail = ({match, amigos,  deactivateFriends, blockFriends, deleteFriends}) => {

    let amigo = amigos.filter(amigo => amigo.id === parseInt(match.params.id));
    if(amigo.length === 0){
        return <div>No existe el amigo</div>
    }else{
        amigo = amigo[0];
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className="card">
                    <div class="card-header">
                        <strong>Nombre del amigo: </strong>{amigo.name}
  </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Telefono: </strong>{amigo.phone}</li>
                        <li className="list-group-item"><strong>Email: </strong>{amigo.email}</li>
                        <li className="list-group-item"><strong>Estado: </strong>{amigo.status}</li>
                    </ul>
                </div>

            </div>


        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        amigos: state
    }
}
export default connect(mapStateToProps, {deactivateFriends, blockFriends, deleteFriends})(AmigoDetail);