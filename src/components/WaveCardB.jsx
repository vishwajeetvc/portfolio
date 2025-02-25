import wave2 from '../assets/wave2.svg'
export default function WaveCardB({ children, className }) {
  return (
    <div className={`my-[30px] md:my-[50px]`}>
      <img className={`w-full relative top-[5px]`} src={wave2} />
      <div className={`bg-white border-t border-white ${className}`}>
        {children}
      </div>
      <img className={`w-full rotate-180 relative bottom-[5px]`} src={wave2} />
    </div>
  )
}

