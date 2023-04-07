import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const PrevStateExample = () => {
    const [otherState, setOtherState] = React.useState("false");
    const prevState = React.useRef("");

    const toggleState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };

    React.useEffect(() => {
        prevState.current = otherState;
    }, [otherState]);

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current}</p>
            <p>Current state: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Toggle state
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
