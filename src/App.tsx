import GameInstructions from "./components/gameInstructions"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import ReactConfetti from "react-confetti"

const App = () => {

    const { colors, correctColor, currentScore, selectedColor,
        setSelectedColor, setCurrentScore,
        setCorrectColor, round, setRound } = useContext(AppContext)

    function setChoice(color: string) {
        setSelectedColor(color)

        setTimeout(() => {
            setSelectedColor('')
            setCorrectColor(colors[Math.floor(Math.random() * colors.length)])
            setRound(round + 1)
        }, 2000);
    }

    function resetGame() {
        setCorrectColor(colors[Math.floor(Math.random() * colors.length)])
        setSelectedColor('')
        setCurrentScore(0)
        setRound(1)
    }

    function nextRound() {
        setSelectedColor('')
        setRound(round + 1)
        setCorrectColor(colors[Math.floor(Math.random() * colors.length)])
    }

    return (
        <div className="p-5">
            <h1 className="font-bold text-4xl mt-10 mb-24 underline">Color Matcher</h1>

            {correctColor == selectedColor && <ReactConfetti wind={.04} />}

            <div data-testid="colorBox"
                className={`bg-${correctColor}-600 text-white text-2xl p-14 font-bold inline-block`}>
                <p data-testid="gameStatus">
                    {
                        selectedColor == '' ? ('Guess the color?') : correctColor == selectedColor ? ('Correct!!!✅') : ('Wrong!!!❌')
                    }
                </p>
            </div>

            <div className="flex gap-5 my-10 flex-wrap">
                <button
                    onClick={() => setChoice('red')}
                    className="bg-red-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Red</button>
                <button
                    onClick={() => setChoice('blue')}
                    className="bg-blue-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Blue</button>
                <button
                    onClick={() => setChoice('yellow')}
                    className="bg-yellow-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Yellow</button>
                <button
                    onClick={() => setChoice('orange')}
                    className="bg-orange-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Orange</button>
                <button
                    onClick={() => setChoice('green')}
                    className="bg-green-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Green</button>
                <button
                    onClick={() => setChoice('purple')}
                    className="bg-purple-600 px-5 py-2 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 active:translate-y-0 transition-all" data-testid="colorOption" >Purple</button>
            </div>

            <p>Round {round}</p>
            <p data-testid="score">Total Score: {currentScore}</p>

            <div className="flex gap-3">
                <button
                    className="cursor-pointer bg-indigo-300 px-4 py-1 mt-10"
                    onClick={() => nextRound()}>
                    Next Round
                </button>
                <button
                    onClick={() => resetGame()}
                    className="cursor-pointer bg-indigo-300 px-4 py-1 mt-10"
                    data-testid="newGameButton">Reset Game</button>
            </div>

            <GameInstructions />
        </div>
    )
}

export default App