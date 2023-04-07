import React from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => {
    return n ? n * factorial(n - 1) : 1;
};

const runFactorial = (n) => {
    console.log("run factorial");
    return factorial(n);
};

const ComplexCalculateExample = () => {
    const [value, setValue] = React.useState(100);
    const [otherState, setOtherState] = React.useState(false);

    const buttonColor = otherState ? "primary" : "secondary";

    React.useEffect(() => {
        console.log("render btn color");
    }, [buttonColor]);

    const fact = React.useMemo(() => runFactorial(value), [value]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value: {value}</p>
                <p>Result: {fact} </p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    Incr
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    Descr
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={`btn btn-${buttonColor} ms-md-2`}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
