// Hooks
import { useEffect } from "react";

// Redux
import { connect } from "react-redux";

import { removeGlobalSuccess } from "../redux/actions/appActions";

const Success = ({ globalSuccess, removeGlobalSuccess }) => {
    // Cierre auto
    useEffect(() => {
        const timer = setTimeout(() => {
            removeGlobalSuccess();
        }, 10000);
        return () => clearTimeout(timer);
    }, [globalSuccess, removeGlobalSuccess]);

    // Cierre user
    const handleCloseAlert = () => {
        removeGlobalSuccess();
    };

    return (
        <div className="flex justify-center absolute z-10 w-screen mt-20">
            <div className="relative py-5 px-16 floatBox border-red-400 text-red-400">
                <button
                    type="button"
                    className="absolute top-0 right-2 p-1"
                    onClick={handleCloseAlert}
                >
                    <span aria-hidden="true" className="text-2xl">
                        &times;
                    </span>
                </button>
                <p className="font-medium">{globalSuccess}</p>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        globalError: state.globalError,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        removeGlobalError: () => dispatch(removeGlobalError()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);
