import { createContext } from "react";

interface IContext {
    colors: string[],
    round: number,
    correctColor: string,
    selectedColor: string,
    currentScore: number,
    setCorrectColor: React.Dispatch<React.SetStateAction<string>>,
    setColors: React.Dispatch<React.SetStateAction<string[]>>,
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>,
    setRound: React.Dispatch<React.SetStateAction<number>>,
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
}

export const AppContext = createContext<IContext>({
    // Default values for context
    colors: ['red', 'blue', 'yellow', 'orange', 'green', 'purple'],
    round: 1,
    correctColor: '',
    selectedColor: '',
    currentScore: 0,
    setRound: () => { },
    setColors: () => { },
    setCorrectColor: () => { },
    setSelectedColor: () => { },
    setCurrentScore: () => { },
})

