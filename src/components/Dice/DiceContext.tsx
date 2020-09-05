import React from "react";

interface IDiceContext {
    onClick?: (sides: number) => void,
    initiated?: boolean,
}

const DiceContext: React.Context<IDiceContext> = React.createContext({});

export default DiceContext;