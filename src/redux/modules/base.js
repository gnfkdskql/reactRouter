// 이 모듈은, 프로젝트의 기반에 관련된 상태를 관리합니다. 예를들어서, 헤더의 렌더링 여부 혹은 유저메뉴 나타남 여부 등을 관리하게됩니다.
import { Map } from "immutable";
import { handleActions, createAction } from "redux-actions";

const SET_HEADER_VISIBILITY = "base/SET_HEADER_VISIBILITY"; // 헤더 렌더링 여부 설정

export const setHeaderVisibility = createAction(
    SET_HEADER_VISIBILITY
); // visible

const initialState = Map({
    header: Map({
        visible: true,
    }),
});

export default handleActions(
    {
        [SET_HEADER_VISIBILITY]: (state, action) =>
            state.setIn(["header", "visible"], action.payload),
    },
    initialState
);
