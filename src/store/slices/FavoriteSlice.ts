import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FavoriteProduct = {
  id: number;
  name: string;
  content: string;
  price: number;
  quantity: number;
};

export type FavoriteState = {
  items: FavoriteProduct[];
};

export const initialState: FavoriteState = {
  items: [], // items olarak favori ürünleri ekleme işlemi yapmak için kullandığımız state
};

export const FavoriteSlice = createSlice({
  name: "favorite", // counterState için isim buluyoruz, type değeri giriyoruz
  initialState, // başlangıç değeri
  reducers: {
    addItem: (state, action: PayloadAction<FavoriteProduct>) => {
      console.log("action", action);
      // yeni bir değer push et.

      const sameItemExist = state.items.find((x) => x.id == action.payload.id);

      // ürün favoriye 1 kez eklenir eğer aynısından varsa ürünün kaldırılması gerekir

      if (sameItemExist) {
        state.items = [...state.items.filter((x) => x.id != action.payload.id)]; // state item çıkar
      } else {
        // ürün favoriye eklenmediyse
        state.items = [...state.items, action.payload]; // state item ekle
      }

      // favoriye aynısından eklendiyse
      // if (sameItemExist) {
      //   sameItemExist.quantity = sameItemExist.quantity + 1;
      //   // yeni quantity değerine göre state güncelle
      //   state.items = [...state.items];
      // } else {
      //   // yeni bir değer ise state edkle
      //   state.items = [...state.items, action.payload];
      // }
    },

    // ödev favori listesindeki ürün en soluna yani adetin yanına delete icon koyalım delete butona basınca favoriden kaldırmak istedeğinize emin misiniz diye sorsun. Evet dersek favoriden kaldırsın bunuda removeFavoriteItem action ile yazalım.

    // eğer ürün listesinde olan bir değer favori ürünler listesinde de varsa ürünler listesindeki ürün arka plan rengi yeşil olsun
  },
});

export const { addItem } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
