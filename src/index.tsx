import React from 'react';
import ReactDOM from 'react-dom';
import {ReactComponent as D20icon} from './assets/d20.svg';
import {ReactComponent as D12icon} from './assets/d12.svg';
import {ReactComponent as D10icon} from './assets/d10.svg';
import {ReactComponent as D8icon} from './assets/d8.svg';
import {ReactComponent as D6icon} from './assets/d6.svg';
import {ReactComponent as D4icon} from './assets/d4.svg';
import './index.scss';
import Dice from "./components/Dice/Dice";

ReactDOM.render(
    <React.StrictMode>
        <div className={'App'}>
            <Dice>
                <Dice.Die icon={D20icon} sides={20}/>
                <Dice.Die icon={D12icon} sides={12}/>
                <Dice.Die icon={D10icon} sides={10}/>
                <Dice.Die icon={D8icon} sides={8}/>
                <Dice.Die icon={D6icon} sides={6}/>
                <Dice.Die icon={D4icon} sides={4}/>
            </Dice>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);