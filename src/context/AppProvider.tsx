import React, { ReactNode, useState, useEffect } from "react"
import { AppContext } from "./AppContext.tsx"

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [colors, setColors] = useState(['red', 'blue', 'yellow', 'orange', 'green', 'purple'])
    const [correctColor, setCorrectColor] = useState(colors[Math.floor(Math.random() * colors.length)])
    const [selectedColor, setSelectedColor] = useState('')
    const [currentScore, setCurrentScore] = useState(0)

    // useEffect(() => {
    //     setCorrectColor()
    // }, [colors])

    useEffect(() => {
        if (selectedColor == correctColor) {
            setCurrentScore((prev) => prev + 1)
        }
    }, [selectedColor, correctColor])

    return (
        <AppContext.Provider value={{
            colors, correctColor, setCorrectColor, currentScore, setCurrentScore, selectedColor, setSelectedColor, setColors
        }}>
            {children}
        </AppContext.Provider>
    )
}