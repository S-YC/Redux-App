import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    );
};

// 소스 최적화
export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    },
)(CounterContainer);