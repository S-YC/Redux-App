import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값 변경
const INSERT = "todos/INSERT"; // 새로운 todo 등록
const TOGGLE = "todos/TOGGLE"; // todo 체크박스 체크/체크 해제
const REMOVE = "todos/REMOVE"; // todo 삭제

export const changeInput = createAction(CHANGE_INPUT, input => input);
let id = 3; // insert 호출시 1씩 증가
export const insert = createAction(INSERT, text => ({
    id: id++,
    text,
    done: false,
}));
export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initalState = {
    input: '',
    todos: [
        {
            id: 1,
            text: '리덕스 기초 학습',
            done: true
        },
        {
            id: 2,
            text: '리엑트와 리덕스 사용',
            done: false
        }        
    ]
};

const todos = handleActions({
        [CHANGE_INPUT]: (state, { payload: input }) => ({ ...state, input }),
        [INSERT]: (state, { payload: todo }) => ({
            ...state,
            todos: state.todos.concat(todo),
        }),
        [TOGGLE]: (state, { payload: id }) => ({
            ...state,
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        }),
        [REMOVE]: (state, {payload: id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id),
        }),
    },
    initalState,
);

export default todos;