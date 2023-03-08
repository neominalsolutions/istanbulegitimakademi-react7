import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  // sayaç işlemi yaparken kullanacağımız state bilgisi
  counter: number;
  criticalCounter?: number;
};

const initialState: CounterState = {
  counter: 0, // sayacın ilk başlangıç değeri
  criticalCounter: 10,
};

export const CounterSlice = createSlice({
  name: "counter", // counterState için isim buluyoruz, type değeri giriyoruz
  initialState, // başlangıç değeri
  reducers: {
    // state güncelleyecek tüm durumları yazıyoruz
    increment: (state: CounterState) => {
      // bu action değerini çağırırsam +1 olarak state güncelle
      // bu action ile sayacı +1 olarak artıracağız
      state.counter = state.counter + 1;
      console.log("increment", state.counter);
    },
    decrement: (state: CounterState) => {
      // sayaç değerini -1 olarak her bir çağırmada değiştir.
      state.counter = state.counter - 1;
    },
    incrementByValue: (state: CounterState, action: PayloadAction<number>) => {
      state.counter = action.payload; // payload componentten gönderilen değer
      console.log("action", action);
    }, // +5 yada  +10 artırmak istersek bu action kullanıcağız
  }, // state güncelleyen yapılara biz reducer ismi veriyorduk
});

export const { increment, decrement, incrementByValue } = CounterSlice.actions;
export default CounterSlice.reducer; // bunu store tanıtıp uygulamanın bu işlemleri üstlenmesini sağladık.
