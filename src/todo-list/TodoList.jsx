import React from "react";
import { ListSideBar } from './components/Side-bar/list-bar/List';
import { Headertd } from './page/header-todo/Title';
import { BodyTodo } from './page/body-todo/BodyTodo';

export function TodoList () {
    const styleEnd = {
        width: '100%',
        height: '550px'
    }
    return <div style={styleEnd}>
        <Headertd />
        <br />
        <ListSideBar />
        <BodyTodo />
    </div>
}