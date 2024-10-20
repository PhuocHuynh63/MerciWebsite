import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='notfound'>
            <div className='background'></div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to={'/'}><button>Quay về trang chủ</button></Link>
        </div>
    );
}

export default NotFound;
