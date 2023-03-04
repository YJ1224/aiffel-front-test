/* ---------------------- 액션 타입 정의 ----------------------*/
const USER_LOGIN = 'user/LOGIN'; // 로그인 성공한 유저 정보

/* ---------------------- 액션 생성 ---------------------- */
export const userLogin = (email, username) => ({
  type: USER_LOGIN,
  user: {
    email: email, //이메일
    username: username, //이름
  },
});

/* ---------------------- state 정의 ---------------------- */
const initialState = {
  info: [],
};

/* ---------------------- reducer 정의 ---------------------- */
function login(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        info: JSON.stringify(state.info.concat(action.user)),
      };
    default:
      return state;
  }
}
export default login;
