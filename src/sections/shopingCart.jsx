import WaveCardB from "../components/WaveCard";
import cart from "../assets/cart.png";

import { useContext } from "react";
import MainElementsContext from "../contexts/mainElement";

export default function ShopingCart() {
  const mainElements = useContext(MainElementsContext);
  return (
    <section
      ref={(node) => node && mainElements.push(node)}
      className="opacity-0"
    >
      <WaveCardB
        className={
          "flex items-center justify-center gap-[20px] md:gap-[50px] flex-col md:flex-row p-5 py-10"
        }
      >
        <h2 className={`md:hidden font-bold mb-[10px] text-[24px] text-center`}>
          <a href="https://vcshop.netlify.app/">
            <u>#vcshop.netlify.app/</u>
          </a>
        </h2>
        <div className={`flex justify-center`}>
          <img
            className={" shadow-[#234234] shadow-lg rounded-2xl w-[400px]"}
            src={cart}
          />
        </div>
        <div className={"grow-0 md:w-[50%] "}>
          <h2
            className={`hidden md:block font-bold mb-[20px] pl-[-10px] md:text-4xl`}
          >
            <a href="https://vcshop.netlify.app/">
              <u>#VC SHOP</u>
            </a>
          </h2>
          <ul className={`md:text-xl`}>
            <li className={"py-2"}>
              - Started with creating own redux, react-redux.
            </li>
            <li className={"py-2"}>
              - Build this shoping cart with @redux/toolkit.
            </li>
            <li className={"py-2"}>
              - Used createAsyncThunk for data fetching after understand Thunk
              middleware.
            </li>
          </ul>
        </div>
      </WaveCardB>
    </section>
  );
}
