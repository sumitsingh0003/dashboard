import {React} from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart, AiOutlineStock } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineCancel } from "react-icons/md";

const Sidebar = ({sideBar, setSideBar}) => {

  return (
    <>
    <div >
      <div className='mainSidebar'>
        <div className='mainLogo'>
          <Link to="/">
            <img src='https://web2rise.com/wp-content/themes/web2rise/assets/images/logo.png' alt="Main Logo"/>
          </Link>
          <button className='sideBrClose' onClick={()=>setSideBar(!sideBar)}>
            <MdOutlineCancel />
          </button>
        </div>
        <div className='sideMenu'>
          <ul>
            <li>Dashboard
                <ul>
                  <li><Link to="/all-groups"><IoMdContacts /> <span>All Groups</span></Link></li>
                </ul>
              </li>
              <li>Pages
                <ul>
                  <li><Link to="/orders"><AiOutlineShoppingCart /> <span>Orders</span></Link></li>
                  <li><Link to="/employees"><IoMdContacts /> <span>Employees</span></Link></li>
                  <li><Link to="/customers"><RiContactsLine /> <span>Customers</span></Link></li>
                </ul>
              </li> 
              <li>Charts
                <ul>
                  <li><Link to="/line"><AiOutlineStock /> <span>Line</span> </Link></li>
                </ul>
              </li>
          </ul>
        </div>
      </div></div>
    </>
  )
}

export default Sidebar
