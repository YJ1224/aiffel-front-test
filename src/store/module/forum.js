/* ---------------------- 액션 타입 정의 ----------------------*/
const FORUM_SELECT = 'forum/SELECT'; //포럼 서비스 목록 조회(페이징용)
const ALL_FORUM_SELECT = 'forum/ALL'; //포럼 서비스 목록 조회 (전체)
const FORUM_DETAIL = 'forum/DETAIL'; //포럼 상세 조회
/* ---------------------- 액션 생성 ---------------------- */
export const forumSelect = (forumListData) => ({
  type: FORUM_SELECT,
  forumList: forumListData,
});

export const allForumSelect = (totalCount, allForumListData) => ({
  type: ALL_FORUM_SELECT,
  allForumList: {
    totalCount: totalCount,
    allForumListData: allForumListData,
  },
});

export const forumDetail = (forumDatailData) => ({
  type: FORUM_DETAIL,
  forumDatail: forumDatailData,
});
/* ---------------------- state 정의 ---------------------- */
const initialState = {
  forumList: [],
  allForumList: [],
  forumDatail: [],
};

/* ---------------------- reducer 정의 ---------------------- */
function forum(state = initialState, action) {
  switch (action.type) {
    case FORUM_SELECT: //페이징 조회
      return {
        ...state,
        forumList: action.forumList,
      };
    case ALL_FORUM_SELECT: //전체 조회
      return {
        ...state,
        allForumList: action.allForumList,
      };
    case FORUM_DETAIL: //상세 조회
      return {
        ...state,
        forumDatail: action.forumDatail,
      };
    default:
      return state;
  }
}
export default forum;
