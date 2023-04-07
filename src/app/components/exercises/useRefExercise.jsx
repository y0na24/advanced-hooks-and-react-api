import React from "react";
import CollapseWrapper from "../common/collapse";

const UseRefExercise = () => {
    const blockRef = React.useRef();
    const textRef = React.useRef();

    const handleClick = () => {
        blockRef.current.style.cssText = `height: 150px; width: 80px; color: #fff;`;
        textRef.current.innerHTML = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={blockRef}
                className="bg-primary d-flex flex-row justify-content-center align-items-center rounded mb-2"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small ref={textRef}>Блок</small>
            </div>
            <button className="btn btn-primary" onClick={handleClick}>
                Кнопка
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
