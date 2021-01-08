import React from 'react';

interface IProps {
    isOpen: boolean;
    counters: number[];
    plusMinusCounters: (counter: number, digit: number) => void;
}

function Menu(props: IProps) {

    return (
        <div>
            <h2>Counters</h2>
            {props.isOpen && <>
                {props.counters.map((el, i) =>
                    <p key={i}>
                        <button
                            onClick={() => props.plusMinusCounters(i, -1)}
                        > -1
                        </button>
                        {' '}{el}{' '}
                        <button
                            onClick={() => props.plusMinusCounters(i, 1)}
                        > 1
                        </button>
                    </p>
                )}
            </>}
        </div>
    );
}

export default Menu;