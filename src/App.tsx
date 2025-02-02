import GameInstructions from "./components/gameInstructions"

const App = () => {
    return (
        <div className="p-5">
            <h1 className="font-bold text-4xl">Color Matcher</h1>

            <div>
                <p>Color Display</p>
                <div data-testid="colorBox"></div>
            </div>

            <div className="flex gap-2">
                <button className="bg-red-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Red</button>
                <button className="bg-blue-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Blue</button>
                <button className="bg-yellow-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Yellow</button>
                <button className="bg-orange-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Orange</button>
                <button className="bg-green-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Green</button>
                <button className="bg-purple-600 px-3 text-white cursor-pointer border border-gray-600 hover:-translate-y-1 transition-all" data-testid="colorOption" >Purple</button>
            </div>

            <GameInstructions />
        </div>
    )
}

export default App