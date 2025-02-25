import wave from '../assets/wave1.svg'
export default function WaveCard({ children, className }) {
  return (
    <div className={`my-[30px] md:my-[50px]`}>
      <img className={`w-full relative top-[1px]`} src={wave} />
      <div className={`bg-white border-t border-white ${className}`}>
        {children}
      </div>
      <img className={`w-full rotate-180 relative bottom-[1px]`} src={wave} />
    </div>
  )
}

