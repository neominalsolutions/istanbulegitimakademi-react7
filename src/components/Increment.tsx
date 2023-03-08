import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../store/slices/CounterSlice";
import { AppDispatch, RootState } from "../store/store";

type Props = {};

export default function Increment({}: Props) {
  const dispatch = useDispatch<AppDispatch>(); // state değiştirme eylemleri için useDispatch hook kullanılır.
  // güncel state bilgilerini çekmek için ise useSelector hook kullanılır
  const counter = useSelector((state: RootState) => state.counterState.counter);
  // dispatch ile action tetiklemesi yaptık
  // redux da action tetiklemek için useDispatch denilen bir hook kullanılıyor.

  return (
    <div>
      <h1>Increment Component</h1>
      <p>Sayaç: {counter}</p>
      <button onClick={() => dispatch(increment())}> + 1 Arttır</button>
    </div>
  );
}
