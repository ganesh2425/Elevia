import React from 'react';
import { Link, NavLink} from 'react-router-dom';
// TODO: Route navigation
function Header() {
    return (
        <>
         <nav className='navbar bg-dark justify-content-center'>
             <li className='nav-link'>
                 <a href='/refresh' className='nav-link'>Refresh</a>
             </li>
             <li className='nav-link'>
                 <NavLink to='/sidebar' className='nav-link' activeClassName='btn btn-success'>Sidebar</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/dashboard' className='nav-link' activeClassName='btn btn-success'>Dashboard</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/project' className='nav-link' activeClassName='btn btn-success'>Project</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/topics' className='nav-link' activeClassName='btn btn-success'>Topics</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/about' className='nav-link' activeClassName='btn btn-success'>About</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/login' className='nav-link' activeClassName='btn btn-success'>Login</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink to='/contact' className='nav-link' activeClassName='btn btn-success'>ContactUs</NavLink>
             </li>
             <li className='nav-link'>
                 <NavLink 
                 to='/logout' 
                 onClick={()=>localStorage.clear()}
                 className='nav-link'
                 activeClassName='btn btn-success'>Logout</NavLink>
             </li>
         </nav>
        </>
    )
}

export default Header;