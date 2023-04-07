import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const RenderCountExample = () => {
    const [otherState, setOtherState] = React.useState(false);
    const renderCount = React.useRef(0);

    const toggleState = () => {
        setOtherState(!otherState);
    };

    React.useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <Divider/>
            <p>render count: {renderCount.current}</p>
            <button className="btn btn-primary" onClick={toggleState}>
                Toggle state
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
