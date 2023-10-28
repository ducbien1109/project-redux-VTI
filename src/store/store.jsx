import { configureStore } from "@reduxjs/toolkit";
import musicVideo from "./Reducer";


export const store = configureStore({
    reducer: {music: musicVideo}
})