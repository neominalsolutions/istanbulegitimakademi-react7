import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Decrement from "./Decrement";
import Increment from "./Increment";

type Props = {};

export default function Counter({}: Props) {
  // useState hook yerine artık veri global olarak redux ile yönetildiği için useSelector hook kullandık
  // component içindeki state değeri useState ile yapıyoruz. Component dışında başka componentlerde de paylaştırcağımız değerler için ise useSelector hook kullanıyoruz.
  const counterValue = useSelector(
    (state: RootState) => state.counterState.counter
  );

  return (
    <div>
      <h1>Counter Component</h1>
      Sayaç : {counterValue}
      {/* artırma ve azaltma durumlarında sayaç bilgisinin değişimini bekliyoruz */}
      <hr></hr>
      <Increment />
      <hr></hr>
      <Decrement />
    </div>
  );
}
