import React from "react";
import { useDispatch } from "react-redux";
import { decrement } from "../store/slices/CounterSlice";
import { AppDispatch } from "../store/store";

type Props = {};

export default function Decrement({}: Props) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h1>Decrement Component</h1>
      <button onClick={() => dispatch(decrement())}> - 1 Sayaç azalt</button>
    </div>
  );
}
