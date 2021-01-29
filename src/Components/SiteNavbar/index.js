import React, { useState, useEffect } from 'react';
import { 
    Collapse, 
    Navbar, 
    NavbarToggler, 
    NavbarBrand, 
    Nav, 
    NavItem
} from 'reactstrap'
import PageData from 'Data/PageData';
import Dropdown from './Dropdown';
import './navbar.css'
import {Link} from 'react-router-dom'
import PlayerListData from 'Data/PlayerListData';

const SiteNavbar = (props) => {

    const [playerListData, setplayerListData] = useState(PlayerListData)

    const displayNavs = PageData.map((page, index) => {

        const pageLink = page.title.split(" ").join("-")

        return (
            <NavItem key={index}>
                <Link to={`/fpl_app/${pageLink}`} className="nav-links">
                    {page.title}
                </Link>
            </NavItem>
        )
    })

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players_refresh")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setplayerListData(playerDataFromServer)
        })
        .catch(err => console.log(err))
    }, [])
    
    const playersList = playerListData.map((player) => player.player_name)
    
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (
        <Navbar color="dark" dark expand="md" className="nav-background">
            <NavbarBrand href="/fpl_app">Fantasy Premier League Stats</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    {displayNavs}
                </Nav>
                <Dropdown head_menu="players" dropdown_menus={playersList}/>
            </Collapse>
        </Navbar>
    );
}

export default SiteNavbar;