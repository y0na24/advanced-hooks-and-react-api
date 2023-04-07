import React from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    React.useEffect(() => {
        console.log("render btn");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};

const MemoizedLogOutButton = React.memo(LogOutButton);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = React.useState(false);

    const handleLogOut = React.useCallback(() => {
        localStorage.removeItem("auth");
    }, []);

    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
