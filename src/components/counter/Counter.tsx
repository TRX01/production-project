import React, {useState} from 'react';
import cls from './Counter.module.scss';

export const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }
    const decrement = () => {
        setCount(count-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button className={cls.button} onClick={() => increment()}>Увеличить</button>
            <button className={cls.button} onClick={() => decrement()}>Уменьшить</button>
        </div>
    );
};
