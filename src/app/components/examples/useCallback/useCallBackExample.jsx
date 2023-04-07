import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = React.useState({});
    const withoutCallback = React.useRef(0);
    const withCallback = React.useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    // withoutCallback

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    React.useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    // withCallback

    const validateWithCallback = React.useCallback((data) => {
        console.log(data);
    }, []);

    React.useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    React.useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>render withoutCallback: {withoutCallback.current}</p>
            <p>render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control mb-3"
                id="email"
                value={data.email || ""}
                name="email"
                onChange={handleChange}
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
