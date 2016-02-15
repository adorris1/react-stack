import React from 'react';
import Dropdown from './Dropdown.jsx';
import DropdownTrigger from './DropdownTrigger.jsx';
import DropdownContent from './DropdownContent.jsx';

//var DropdownTrigger = Dropdown.DropdownTrigger;
//var DropdownContent = Dropdown.DropdownContent;

class MenuList extends React.Component{
    render(){
        return(
            <Dropdown>
                <DropdownTrigger>Profile</DropdownTrigger>
                <DropdownContent>
                    <img src="avatar.jpg" /> Username
                    <ul>
                        <li>
                            <a href="/profile">Profile</a>
                        </li>
                        <li>
                            <a href="/favorites">Favorites</a>
                        </li>
                        <li>
                            <a href="/logout">Log Out</a>
                        </li>
                    </ul>
                </DropdownContent>
            </Dropdown>
        )
    }
}
export default MenuList;