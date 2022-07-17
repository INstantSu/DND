import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const monsterFarmModalSlice = createSlice({
  name: "monsterFarm",
  initialState,
  reducers: {
    openMonsterFarmModal: (state) => {
      // 원래는 객체의 immutability를 지키기 위해 return 할 때 깊은 복사/얕은 복사를 신경써야하지만,
      // redux-toolkit을 설치하면 immer라는 라이브러리도 같이 설치가된다.
      // immer 라이브러리가 immutability를 대신 관리해준다.
      state.isOpen = true;
    },
    closeMonsterFarmModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openMonsterFarmModal, closeMonsterFarmModal } =
  monsterFarmModalSlice.actions;

export default monsterFarmModalSlice.reducer;
