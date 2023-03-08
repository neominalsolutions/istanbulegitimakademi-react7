import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slices/CounterSlice";
import FavoriteSlice from "./slices/FavoriteSlice";

export const store = configureStore({
  reducer: {
    counterState: CounterSlice, // counterState değerini  CounterSlice vericek
    favoriteState: FavoriteSlice,
  }, // sistemde tanımladığımız reducer yani yeni adı ile slice dediğimiz yapıları buraya tanımlayacağız. Uygulama içerisinde birden fazla slice olabilir. // counterSlice // favoriUrunler slice yapalım
});

// Root State üzerinden uygulamadaki tüm state tanımlarına ulaşabiliriz.
// favoriteState, counterState
/* store: { 
    counterState:{counter:0}, // propertyname üzerinden state bilgileri istediğimiz component üzerindne çekeceğiz 
    FavoriteState:[{id:1,name:'kazak'},{id:2,name:'gömlek'}]  }
  */

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; // bütün uygulama genelinde state güncelleyecek action'lara AppDispatch tipinde erişmek için kullandık.
