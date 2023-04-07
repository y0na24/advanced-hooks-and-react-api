import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ListComponent>
                <Component />
                <Component />
                <Component />
            </ListComponent>
        </CollapseWrapper>
    );
};

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return React.cloneElement(child, { index: i + 1 });
    });
};

const Component = ({ index }) => {
    return <div>Компонент списка {index}</div>;
};

Component.propTypes = {
    index: PropTypes.number
};

export default ChildrenExercise;
