import WaveCard from "../components/WaveCard";
import nexa from '../assets/nexa.png'

import { useContext } from 'react';
import MainElementsContext from '../contexts/mainElement'

export default function Nexa() {
  const mainElements = useContext(MainElementsContext)
  return (
    <section
      ref={(node) => node && mainElements.push(node)}
      className="opacity-0"
    >
      <WaveCard className={`flex flex-col items-center md:flex-row p-5 gap-[30px] w-full`}>

        <h2 className={`md:hidden text-center text-[24px] font-bold pl-[-10px]`}>
          <a href="https://github.com/vishwajeetvc/nexa">
            <u> # Screen Sharing Application </u>
          </a>
        </h2>

        <div className={`md:w-[50%] relative md:bottom-[50px]`}>
          <img className={' shadow  md:w-[80%] md:float-end shadow-[#0f3249] rounded-2xl '} src={nexa} />
        </div>

        <div className={'text-sm md:text-lg md:w-[45%] relative md:top-[50px] overflow-visible z-10'}>
          <h2 className={`hidden md:block font-bold pl-[-10px] md:text-4xl`}>
            <a href="https://github.com/vishwajeetvc/nexa">
              <u> # Screen Sharing Application </u>
            </a>
          </h2>
          <ul className={`py-2`}>
            <li className={`py-1`}>- Built with <b>Electron, React, Tailwind, and WebRTC.</b></li>
            <li className={`py-1`}>- Created own UI of the app using <b>figma myself</b>.</li>
            <li className={`py-1`}>
              - While learning WebRTC, <b>understood</b> briefly about protocols like
              <b> UDP, TCP/IP and HTTP</b>. And after that, created a simple <b>CLI chat app using “dgram” & “net”</b> module in Nodejs.
            </li>
            <li className={`py-1`}>
              - Used browser <b>“navigator”</b> interface to get the video of the
              screen with the help of youtube videos and mdn docs.
            </li>
          </ul>
        </div>
      </WaveCard>
    </section>
  )
}

