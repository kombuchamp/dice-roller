import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as D20icon} from './assets/d20.svg';
import {ReactComponent as D6icon} from './assets/d6.svg';
import './index.scss';
import Dice from "./components/Dice/Dice";

ReactDOM.render(
    <React.StrictMode>
        <div className={'App'}>
            <Dice>
                <Dice.Die icon={D20icon} sides={20}/>
                <Dice.Die icon={D6icon} sides={6}/>
            </Dice>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);