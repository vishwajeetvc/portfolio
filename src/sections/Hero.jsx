import dp from '../assets/dp.webp';
import ncraft from '../assets/ncraft.png';

import { useContext } from 'react';
import MainElementsContext from '../contexts/mainElement'

export function Button({ children }) {
  return <>
    <div className='inline-block bg-white p-1 rounded-4xl'>
      <div className=' bg-[#EFB036]  rounded-3xl px-4 font-bold text-white text-[14px] md:text-[20px]'>
        {children}
      </div>
    </div>
  </>
}

export default function Hero() {
  const mainElements = useContext(MainElementsContext)
  return (<>
    <section
      ref={(node) => node && mainElements.push(node)}
      className='pt-[100px] py-[50px] px-10 opacity-0'>

      <div className='md:flex shrink-0 items-center '>
        <div className='grow-1 flex justify-center shrink-0'>
          <img
            className="w-[80%] relative"
            src={dp}
            alt="profile_picture" />
        </div>

        <div className='grow-2 flex flex-col py-8'>
          <div className='flex justify-between md:mt-[50px] flex-wrap md:justify-end md:align-middle md:gap-[30px] md:pr-[100px]'>
            <a target="_blank" href="https://www.linkedin.com/in/vishwajeet-kumar-052054248">
              <Button>Linked In</Button>
            </a>
            <a target="_blank" href="https://github.com/vishwajeetvc">
              <Button>Github</Button>
            </a>

          </div>
          {/* vishwajeet name design*/}
          <div className='relative w-full md:mt-[40px]'>
            <div className={` text-center md:max-w-[100%] py-2 text-[#EFB036] text-[18px] md:text-[52px] font-bold `}>
              <img className="top-[5px]  w-[40px] md:w-[100px] relative" src={ncraft} />
              <div className={`max-w-[100%] bg-[#EFB036] h-[3px] relative top-[8px]`}></div>
              <h1 className={'inline-block py-2 text-white'}>VISHWAJEET KUMAR</h1>
              <div className={`max-w-[100%] bg-[#EFB036] h-[3px] relative top-[-8px]`}></div>
              <img className='rotate-180 w-[40px] md:w-[100px] relative bottom-[5px]  right-[0px] float-end' src={ncraft} />
            </div>
            <address className="text-[#ffffaa] font-bold">
              <p>Web-Developer</p>
              vcnvim@gmail.com
            </address>
          </div>
        </div>
      </div>

      <div className="text-white font-bold md:mt-[100px] md:text-center text-sm md:text-2xl">

        {/* will show in mobile*/}
        <p className="md:hidden text-center text-lg">{`-: Education :-`}</p>
        <p className="md:hidden font-normal text-center">{`BCA from Maulana Mazharul Haque Arabic and Persian University.`}</p>

        {/* will show md and above*/}
        <p className="hidden font-normal md:block">{`Education  : - BCA  { Maulana Mazharul Haque Arabic and Persian University }`}</p>

        <h2 className={`border-t-yellow-500 border-t text-center border-b border-b-yellow-500 my-5 py-4`}>
          {`NODEJS, Express, MongoDB, REACTJS, HTML, CSS, JAVASCRIPT, GIT, Github &  Commands ( BASH )`}
        </h2>

      </div>

    </section>
  </>)
}
