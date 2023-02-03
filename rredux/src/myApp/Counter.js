import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../counterSlice/counterSlice';

function Counter() {

    const count = useSelector( (state) => state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <div>
            <button aria-label="Increment value" onClick={ () => dispatch(increment()) }>
                Increment
            </button>
            <span>{ count }</span>
            <button aria-label="Decrement value" onClick={ () => dispatch(decrement()) }>
                Decrement
            </button>
        </div>
    </div>
  )
}

// Тепер щоразу, коли ви натискаєте кнопки «Збільшити» та «Зменшити»:
// Відповідну дію Redux (action) буде надіслано в магазин (store)
// Редуктор лічильника бачитиме дії та оновлюватиме свій стан
// Компонент <Counter>побачить нове значення стану зі сховища та повторно візуалізує себе з новими даними

export default Counter