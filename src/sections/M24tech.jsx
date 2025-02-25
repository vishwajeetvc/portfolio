import m24 from '../assets/m24.webp'
import WaveCardB from "../components/WaveCardB";

import { useContext } from 'react';
import MainElementsContext from '../contexts/mainElement'



export default function M24tech() {
  const mainElements = useContext(MainElementsContext)
  return (
    <section
      ref={(node) => node && mainElements.push(node)}
      className="opacity-0"
    >
      <WaveCardB className={"flex items-center justify-center gap-[20px] md:gap-[50px] flex-col md:flex-row p-5 py-10"}>
        <h2 className={`md:hidden font-bold mb-[10px] text-[24px] text-center`}>
          <a href="https://m24techspace.com/">
            <u>
              #M24Techspace.com
            </u>
          </a>
        </h2>
        <div className={`flex justify-center`}>
          <img className={' shadow-[#234234] shadow-lg rounded-2xl'} src={m24} />
        </div>
        <div className={'grow-0 md:w-[50%] '}>
          <h2 className={`hidden md:block font-bold mb-[20px] pl-[-10px] md:text-4xl`}>
            <a href="https://m24techspace.com/"><u>#M24Techspace.com</u></a>
          </h2>
          <ul className={`md:text-xl`}>
            <li className={'py-2'}>
              - Started with creating multiple pages in HTML & CSS.
            </li>
            <li className={'py-2'}>
              - Migrated the pages into <b>React and tailwind</b> by creating small and reusable components.
            </li>
            <li className={'py-2'}>
              - Implemented Routing using <b>react-router-dom.</b>
            </li>
          </ul>
        </div>

      </WaveCardB>
    </section>
  )
}

