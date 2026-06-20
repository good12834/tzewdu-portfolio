// export function setupCounter(element: HTMLButtonElement) {
//   let counter = 0
//   const setCounter = (count: number) => {
//     counter = count
//     element.innerHTML = `Count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(counter + 1))
//   setCounter(0)
// }
import React, { useState } from 'react'
import { Plus, RotateCcw } from 'lucide-react'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center gap-4 p-8 rounded-xl bg-slate-800/40 border border-slate-700/50">
      <div className="text-4xl font-bold text-blue-400">{count}</div>
      <div className="flex gap-2">
        <button
          onClick={() => setCount(count + 1)}
          className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <Plus size={20} />
        </button>
        <button
          onClick={() => setCount(0)}
          className="p-3 bg-slate-700/50 border border-slate-600 text-slate-300 rounded-lg hover:bg-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  )
}

export default Counter