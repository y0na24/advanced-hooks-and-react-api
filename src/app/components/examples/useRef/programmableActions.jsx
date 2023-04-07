import React from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const ProgrammableActionsExample = () => {
    const inputRef = React.useRef();

    const handleClick = () => {
        console.log(inputRef.current.clientWidth);
        inputRef.current.focus();
    };

    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />

            <button className="btn btn-primary" onClick={handleClick}>
                Focus input
            </button>
            <button
                className="btn btn-secondary ms-3"
                onClick={handleClickWidth}
            >
                Изменить ширину
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
