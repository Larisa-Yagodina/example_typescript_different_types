import React from 'react';
import {v4 as uuidv4} from 'uuid';

interface IProps {
    counter: number;
    buttons: number[];
    mathAction: (counter: number, digit: number) => number;
}

function Menu(props: IProps) {

    return (
        <div>
            <h2>One counter</h2>
            {props.buttons.reverse().map(button =>
                <button
                    key={uuidv4()}
                    onClick={() => props.mathAction(props.counter, -button)}
                >{-button}</button>
            )}
            {' '}{props.counter}{' '}
            {props.buttons.reverse().map(button =>
                <button
                    key={uuidv4()}
                    onClick={() => props.mathAction(props.counter, button)}
                >{button}</button>
            )}
            <p>Open Console to see the result.</p>
        </div>
    );
}

export default Menu;