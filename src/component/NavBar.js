import {Link} from 'react-router-dom'
import './Style.css'

const NavBar =()=>{
    return (
        <div className='navBar'>
            <h3>
    <Link  style={{textDecoration:'none', color:'white'}}  to='/Home'>Home</Link>
    </h3>
    <h3>
    <Link style={{textDecoration:'none', color:'white'}} to='/Exercise'>Exercise</Link>
    </h3>
        </div>
    )
}
export default NavBar;