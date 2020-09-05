import React from 'react';
import DiceContext from "./DiceContext";
import Die from "./Die";
import scss from './dice.module.scss';

type DiceProps = {
    children: React.ReactNode,
}

export default function Dice({children}: DiceProps) {
    const timerRef = React.useRef(0);
    const [initiated, setInitiated] = React.useState(false);
    const [diceSet, setDiceSet] = React.useState<Array<number>>([]);
    const [results, setResults] = React.useState<Array<number>>([]);

    React.useEffect(() => {
        if (!initiated) {
            setResults(getDiceRollResults(diceSet));
        }
    }, [initiated, diceSet]);

    function onClick(sides: number) {
        if (!initiated) {
            setDiceSet([]);
            setResults([]);
            setInitiated(true);
        }
        if (timerRef.current > 0) {
            clearTimeout(timerRef.current);
        }
        setDiceSet(diceSet => [...diceSet, sides]);
        timerRef.current = window.setTimeout(() => {
            timerRef.current = -1;
            setInitiated(false);
        }, 1000);
    }

    function getDiceRollResults(dice: Array<number>): Array<number> {
        return dice.map((sides) => Math.floor(Math.random() * sides) + 1);
    }

    function stringifyDiceSet(diceSet: Array<number>) {
        const diceMap = diceSet.reduce((acc, sides) => {
            acc[sides] = (acc[sides] | 0) + 1;
            return acc;
        }, {} as any);
        return Object.entries(diceMap)
            .map(([sides, count]) => `${count}d${sides}`)
            .join(' + ');
    }

    return (
        <DiceContext.Provider value={{onClick, initiated}}>
            <div className={scss.container} onMouseDown={e => e.preventDefault()}>
                <div className={scss.dice}>{children}</div>
                <div className={scss.result}>
                    {results.length
                        ? (
                            <>
                                {results.join(' + ') + ' = '}
                                <span>{results.reduce((acc, cur) => acc + cur, 0)}</span>
                            </>
                        ) : stringifyDiceSet(diceSet)}
                </div>
            </div>
        </DiceContext.Provider>
    );
}

Dice.Die = Die;