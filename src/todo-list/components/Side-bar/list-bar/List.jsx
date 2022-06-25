import React from "react";
import { Iteam } from '../bar-options/Item';
import { SideBarData } from '../../router-Todo/SideBarData';
import { Link } from "react-router-dom";
import { Menu} from 'antd';


export function ListSideBar() {
    const list =SideBarData
    
    return(
        <Menu theme="dark" mode="vertical" style={{ width: '20%',height: "100%",float: 'left' }} >
            {list.map((x)=>{
                return <Link to={x.path}><Iteam key ={x.id} {...x}/></Link>
            })}
        </Menu>
    )
}