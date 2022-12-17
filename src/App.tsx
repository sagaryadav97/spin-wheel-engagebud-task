import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  function rotate() {
    setCount(360 * 5)
    let timerID = setInterval(() => {
      setCount((count) => count + 90)
      clearInterval(timerID)
    }, 6000)
    console.log(count, 'count');

  }
  console.log(count, 'count');

  return (
    <>
      <div onClick={rotate} className="flex justify-center items-center h-screen">
        <div style={{
          transform: `rotate(${count}deg)`,
          transition: '8s'
        }} className={`h-[600px] w-[600px] rounded-full border-[#ECBA3F] bg-[#ECBA3F]	border-[15px] flex-row relative overflow-hidden`}>
          <div className="my-custom-style br1">
            <div className="txt-ct">30% SITEWIDE OFF</div>
          </div>
          <div className="my-custom-style br2">
            <div className="txt-ct"> BUY 1 GET 1 FREE </div>
          </div>
          <div className="my-custom-style br3">
            <div className="txt-ct">FREE COFFEE MUG ON PURCHASE WORTH 1000+</div>
          </div>
          <div className="my-custom-style br4">
            <div className="txt-ct">Buy 2 Effervescent tablets & get 1 free</div>
          </div>
          <div className="my-custom-style br5">
            <div className="txt-ct">Free 50g tea on purchase of Rs. 500</div>
          </div>
          <div className="my-custom-style br6">
            <div className="txt-ct">HOT CHOCLATE FREE WITH TEA</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
