import React from "react";

const TodoItem = ({ todo, onToggle, onRemove }) => {
    return (
        <div>
            <input type="checkbox" />
            <span>예제 파일</span>
            <button>삭제</button>
        </div>
    );
};

const Todos = ({
    input, //인풋창 입력 테스트
    todos, // 할일 목록을 저장 할 객체
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
}) => {
    const onSubmit = e => {
        e.preventDefault();
    };

return (
    <div>
        <form onSubmit={onSubmit}>
        <input />
        <button type="submit">등록</button>
        </form>
        <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        </div>
    </div>
    );
};

export default Todos;
