import { FaSpinner } from 'react-icons/fa';
import '../Styles/spinner.css';
export function Spinner() {
    return (
        <div className='spinner'>
            <FaSpinner className='spinning' size={60}/>
        </div>
    )
}
