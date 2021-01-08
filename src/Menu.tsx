import React from 'react';
import {v4 as uuidv4} from 'uuid';

interface ILinks {
    name: string;
    link: string;
}

interface IProps {
    menuItems: ILinks[];
    header: string;
}

function Menu(props: IProps) {

    return (
        <div>
            <h1>{props.header}</h1>
            <ul>
                {props.menuItems.map(el =>
                    <li key={uuidv4()}>
                        <a href={el.link}>{el.name}</a>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default Menu;