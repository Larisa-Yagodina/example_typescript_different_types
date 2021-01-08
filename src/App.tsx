import React, {useState} from 'react';
import './App.css';
import Menu from "./Menu";
import OneCounter from './OneCounter';
import Counters from './Counters'

function App() {

  const menu = [
    {name: 'Main page', link: '/'},
    {name: 'Products', link: '/products'},
    {name: 'About', link: '/about'},
    {name: 'Contacts', link: '/contacts'},
  ];

  const header = 'Example of different types';
  const counter = 1;
  const buttons = [1, 2, 3];

  const mathAction = (counter: number, digit: number) => {
    console.log(counter + digit);
    return (counter + digit);
  }

  const isOpen = true;
  const [counters, setCounters] = useState([1, 2, 3]);

  const plusMinusCounters = (index: number, digit: number) => {
    const newCounters = counters.map((el, i) => {
      if (i === index) return el + digit;
      return el;
    })
    setCounters(newCounters)
  }

  return (
      <div>
        <Menu
            menuItems={menu}
            header={header}
        />
        <OneCounter
            counter={counter}
            buttons={buttons}
            mathAction={mathAction}
        />
        <Counters
            isOpen={isOpen}
            counters={counters}
            plusMinusCounters={plusMinusCounters}
        />
      </div>
  );
}

export default App;
