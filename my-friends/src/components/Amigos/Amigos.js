import { Link } from 'react-dom';
import { connect } from 'react-redux';

const Amigos = ({ state, amigos }) => {
    let amigosFilter = amigos.filter(amigo => amigo.status === state);
    return (
        <div className='col'>
            <div className="card">
                <div className="card-header">
                    <span>{state}</span>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        amigosFilter.map(amigo =>
                            <Link to={`/edit/${amigo.id}`}>{amigo.name}</Link>
                        )
                    }
                </ul>
            </div>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        amigos: state
    }
}
export default connect(mapStateToProps, null)(Amigos);