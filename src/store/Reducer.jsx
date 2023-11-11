import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  popularRadio: [],
  popularArtist: [],
};

// createSlice giúp quản lý trạng thái ứng dụng.
export const music = createSlice({
  name: "music video",
  initialState,
  // sử dụng để thay đổi trạng thái của ứng dụng dựa trên hành động (actions) được gửi đến slice
  reducers: {
    setDataRadio: (states, actions) => {
      states.popularRadio = actions.payload;
    },
    setDataPopularArtist: (states, actions) => {
      states.popularArtist = actions.payload;
    },
  },
});
// cái thằng dispath không xài trong reducer dược nha anh

export const { setDataPopularArtist, setDataRadio } = music.actions; // này để export ra mới xài đc
export const getDataPopularRadio = (state) => {
  return state.music.popularRadio; //Hàm này trả về mảng dữ liệu popularRadio từ trạng thái ứng dụng
};
export const getDataPopularArtist = (state) => {
  return state.music.popularArtist;
};

const musicVideo = music.reducer;
export default musicVideo; // là 1 reducer
