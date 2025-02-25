import bottom from '../assets/bottomwhite.svg'
function Body({ children }) {
  return (<>
    <div className="p-[30px] bg-[#002035]">
      <div className="relative bg-[#0F3249] rounded-2xl max-w-[1333px] m-auto shadow-gray-900 ">
        {children}
        <div className="relative">
          <img className={'w-full'} src={bottom} />
          <p className={"absolute text-center bottom-1 md:bottom-4 left-[50%] translate-x-[-50%] text-[8px] font-bold md:text-3xl"}># Created with ❤️ By Vishwajeet Kumar.</p>
        </div>
      </div>
    </div>
  </>);
}

export default Body;
