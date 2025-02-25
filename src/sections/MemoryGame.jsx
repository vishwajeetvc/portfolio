import mgame from '../assets/mgame.png'
import { useContext } from 'react';
import MainElementsContext from '../contexts/mainElement'

export default function MemoryGame() {
  const mainElements = useContext(MainElementsContext)
  return (
    <section
      ref={(node) => node && mainElements.push(node)}
      className={`opacity-0 p-5 flex items-center flex-col justify-center gap-[20px] md:flex-row-reverse py-[20px] md:py-[100px]`}>

      <h2 className={`md:hidden font-bold text-white mb-[10px] text-[24px] text-center`}>
        <a href="https://vcmemorygame.netlify.app/">
          <u>#Memory Game using Javascript</u>
        </a>

      </h2>
      <div className={`flex justify-center `}>
        <img className={' shadow-white rounded-xl shadow-md md:shadow-lg'} src={mgame} />
      </div>

      <div className={'grow-0 md:w-[50%] text-[#2698e2]'}>
        <h2 className={`hidden md:block font-bold text-white mb-[20px] pl-[-10px] md:text-4xl`}>
          <a href="https://vcmemorygame.netlify.app/">
            <u>#Memory Game using Javascript</u>
          </a>
        </h2>
        <ul className={`md:text-xl`}>

          <li className={'py-2'}>
            - Built an interactive memory card game using HTML, CSS, and JavaScript.
          </li>

          <li className={'py-2'}>
            - Features include responsive design, animated card flipping,
            and a user-friendly interface
          </li>
        </ul>
      </div>
    </section>
  )
}

