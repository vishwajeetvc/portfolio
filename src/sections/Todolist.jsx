import todo from '../assets/todo.svg'

import { useContext } from 'react';
import MainElementsContext from '../contexts/mainElement'



export default function Todolist() {
  const mainElements = useContext(MainElementsContext)
  return (
    <section
      ref={(node) => node && mainElements.push(node)}
      className={`opacity-0 p-5 flex flex-col justify-center gap-[20px] md:flex-row-reverse py-[20px] md:py-[100px]`}>

      <h2 className={`md:hidden font-bold text-white mb-[10px] text-[24px] text-center`}>
        <a href={`https://github.com/vishwajeetvc/cli-todo`}>
          <u># Todo LIst in CLI using Nodejs</u>
        </a>
      </h2>
      <div className={`flex justify-center`}>
        <img className={' shadow-white '} src={todo} />
      </div>

      <div className={'grow-0 md:w-[50%] text-[#2698e2]'}>
        <h2 className={`hidden md:block font-bold text-white mb-[20px] pl-[-10px] md:text-4xl`}>
          <a href={`https://github.com/vishwajeetvc/cli-todo`}>
            <u># Todo LIst in CLI using Nodejs</u>
          </a>
        </h2>
        <ul className={`md:text-xl`}>
          <li className={'py-2'}>
            - After understanding <b>stdin/stdout</b> in node, developed a
            command-line to-do application using <b>core Nodejs</b> with
            only library chalk (for beauty).
          </li>
          <li className={'py-2'}>
            - Implemented features like adding, listing, updating,
            and deleting tasks using file-based storage. For interaction
            <b>created custom commands add, list, delete & done</b>.
          </li>
          <li className={'py-2'}>
            - Utilized the Nodejs fs module for data persistence and
            stream ( process.stdin ) for user input handling.
          </li>
          <li>
            - Designed an intuitive command-line interface with
            interactive prompts.
          </li>
        </ul>
      </div>
    </section >
  )
}

