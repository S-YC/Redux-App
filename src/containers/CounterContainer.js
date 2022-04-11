import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = () => {
    // state 상태 조회
    const number = useSelector(state => state.counter.number);
    // Dispatch 사용을 위한 useDispatch Hook 선언 
    const dispatch = useDispatch();

    // useCallback 최적화
    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDncrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDncrease}
        />
    );
};

export default CounterContainer;