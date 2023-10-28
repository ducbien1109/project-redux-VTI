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
    }, //Hành động này cập nhật trạng thái popularRadio bằng cách lấy dữ liệu từ hành động đã gửi (payload).
    // muốn thay đổi state cần có action
    // bên trong hàm sẻ nhận vào 1 state và 1 action
    setDataPopularArtist: (states, actions) => {
      // state là cả nguyên cục data bự cảu mình ở đây là opject có 2 tường data muốn thay đổi cái nào thì . cái đó
      // cái tham biến actions nó trả về 1 opj có rất nh thứ ở ở trong lấy data thì .payload
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
