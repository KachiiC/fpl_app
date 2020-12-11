import React from 'react'
import {Link} from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'


const Dropdown = (props) => {

    const Menus = props.dropdown_menus

    const displayedMenus = Menus.map((menu, index) => (
        <DropdownItem className="nav-dropdown-menu-link" key={index}>
            <Link to={`/player/${menu}`} className="nav-dropdown-menu-link">
                {menu}
            </Link>
        </DropdownItem>
    ))

    return (
        <UncontrolledDropdown>
            <DropdownToggle nav caret className="nav-links">
                {props.head_menu}
            </DropdownToggle>
            <DropdownMenu inNavbar nav className="nav-dropdown-menu">
                {displayedMenus}
            </DropdownMenu>
        </UncontrolledDropdown>
    )
}

export default Dropdown