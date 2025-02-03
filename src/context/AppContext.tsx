import { createContext } from "react";

interface IContext {
    colors: string[],
    correctColor: string,
    selectedColor: string,
    currentScore: number,
    setCorrectColor: React.Dispatch<React.SetStateAction<string>>,
    setColors: React.Dispatch<React.SetStateAction<string[]>>,
    setSelectedColor: React.Dispatch<React.SetStateAction<string>>,
    setCurrentScore: React.Dispatch<React.SetStateAction<number>>,
}

export const AppContext = createContext<IContext>({
    // Default values for context
    colors: ['red', 'blue', 'yellow', 'orange', 'green', 'purple'],
    correctColor: '',
    selectedColor: '',
    currentScore: 0,
    setColors: () => { },
    setCorrectColor: () => { },
    setSelectedColor: () => { },
    setCurrentScore: () => { },
})

