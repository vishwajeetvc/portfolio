import { useEffect, useContext } from "react";
import Body from "./components/Body";
import Hero from "./sections/Hero";
import M24tech from "./sections/M24tech";
import MemoryGame from "./sections/MemoryGame";
import Nexa from "./sections/Nexa";
import MainElementsContext from './contexts/mainElement'
import Todolist from "./sections/Todolist";

function App() {

  const mainElements = useContext(MainElementsContext)

  useEffect(() => {
    fadeIn(mainElements)
  }, [])

  return (<>
    <Body>
      <Hero />
      {/* projects*/}
      <Nexa />
      <Todolist />
      <M24tech />
      <MemoryGame />
    </Body>
  </>);
}

export default App


function fadeIn(els) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-[fade_700ms_ease-in]')
        entry.target.classList.remove('opacity-0')
      }
    })
  }, { threshold: 0.4 });
  els.forEach(el => {
    observer.observe(el);
  })
}
