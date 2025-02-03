
const GameInstructions = () => {
    return (
        <div data-testid="gameInstructions" className="bg-gray-200 p-10 inline-block mt-3 lg:absolute top-5 right-5">
            <h1 className="font-bold mb-3">Game Instructions🎮💡</h1>

            <ul className="list-disc">
                <li>A random color is placed in the answer box</li>
                <li>Take a guess at which of the buttons contains the correct color</li>
                <li>On click if the option was right or wrong it will be shown</li>
                <li>Click on "Next Round" to move to the next round</li>
                <li>Click on "Reset Game" to move to reset score to zero</li>
            </ul>
        </div>
    )
}

export default GameInstructions