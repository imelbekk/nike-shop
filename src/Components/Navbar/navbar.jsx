import React, { useState } from "react";
import '../../ui/Navbar.css'
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import Like from "@mui/icons-material/FavoriteBorder";
import ShoppingBag from '@mui/icons-material/WorkOutline';
import nike from '../../assets/nike.png'
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

export default function Navbar() {
    const [links,Setlinks] = useState([
        {id:1, path: 'new', title: 'New & Faetured'},
        {id:2, path: 'men', title: 'Men'},
        {id:3, path: 'women', title: 'Women'},
        {id:4, path: 'kids', title: 'Kids'},
        {id:5, path: 'jordan', title: 'Jordan'},
        {id:6, path: 'sale', title: 'Sale'},
    ])
  return (
    <div className="pages">
      <img src={nike} alt="nike" />

      <div className="links">
        {
            links.map((item,index)=>{
                return <li>
                    <Link to={item.path}>{item.title}</Link>
                </li>
            })
        }
      </div>

      <div className="nav_end">
        <div className="search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <PersonOutlineIcon className="hidden_icon"/>
        <Like className="like_icon"/>
        <ShoppingBag />
        <MenuIcon className="hidden_icon"/>
      </div>
    </div>
  );
}
