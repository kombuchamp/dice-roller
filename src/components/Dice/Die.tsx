import React from "react";
import DiceContext from "./DiceContext";
import { IconComponent } from "./types";
import scss from './die.module.scss';

type DieProps = {
    icon: IconComponent,
    sides: number,
};

export default function Die({icon: Icon, sides}: DieProps) {
    const [clicks, setClicks] = React.useState(0);
    const ctx = React.useContext(DiceContext);

    React.useEffect(() => {
        if (!ctx.initiated) {
            setClicks(0);
        }
    }, [ctx.initiated]);

    return (
        <div className={scss.container}>
            <div className={scss.counter}>{clicks || ''}</div>
            <div style={{transform: `rotate(${clicks * 360}deg)`}}
                 onClick={() => {
                     setClicks((clicks) => ++clicks);
                     ctx.onClick?.(sides);
                 }}
                 className={scss.die}
            >
                <Icon style={{width: 64, height: 64}}/>
            </div>
        </div>
    );
}