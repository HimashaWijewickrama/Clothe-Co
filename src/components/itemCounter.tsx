import { useState } from "react";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import { Button as MUIButton, Alert as MUIAlert, AlertTitle as MUIAlertTitle } from "@mui/material";


interface ItemCounterProps {
    title: string;
}

export const ItemCounter: React.FC<ItemCounterProps> = ({ title }) => {
    const [count, setCount] = useState(0);
    const [showWarning, setShowWarning] = useState(false); // State to manage error alert
    const [showInfor, setShowInfor] = useState(false); //State to manage infor alert

    const handleAdd = () => {
        if (count < 10) {
            setCount(prevCount => prevCount + 1);
        } else {
            setShowInfor(true); // Display error alert

        }
    };

    const handleRemove = () => {
        if (count > 0) {
            setCount(prevCount => prevCount - 1);
        } else {
            setShowWarning(true); // Display warning alert
        }
    };

    const handleCloseWarning = () => {
        setShowWarning(false); // Hide warning  alert when closed
    };

    const handleCloseInfor = () => {
        setShowInfor(false); //Hide infor alert when closed
    }

    return (
        <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', marginLeft: '10px' }}>
                <MUIButton
                    size="medium"
                    variant="outlined"
                    onClick={handleAdd}
                    startIcon={<MdAddShoppingCart size={20} style={{ marginRight: '5px', cursor: 'pointer' }} />}
                >
                    <p className="fs-6 fw-bold text-capitalize" style={{ margin: '0' }}>Add</p>
                </MUIButton>
                <h6 className="fw-bold" style={{ margin: '0 10px' }}>{count}</h6>
                <MUIButton
                    size="medium"
                    variant="outlined"
                    color="error"
                    onClick={handleRemove}
                    startIcon={<MdRemoveShoppingCart size={20} style={{ marginRight: '5px', cursor: 'pointer' }} />}
                >
                    <p className="fs-6 fw-bold text-capitalize" style={{ margin: '0' }}>Remove</p>
                </MUIButton>
            </div>
            {showWarning && (
                <MUIAlert
                    severity="warning"
                    onClose={handleCloseWarning}
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 9999,
                    }}
                >
                    <MUIAlertTitle className="fw-bolder">Warning</MUIAlertTitle>
                    <p className="fw-bold">Your cart is empty!</p>
                </MUIAlert>
            )}
            {showInfor && (
                <MUIAlert
                    severity="info"
                    onClose={handleCloseInfor}
                    style={{
                        position: 'absolute',
                        top: 0,
                        width: '100%',
                        zIndex: 9999,
                    }}
                >
                    <MUIAlertTitle className="fw-bolder">Important</MUIAlertTitle>
                    <p className="fw-bold">Out of Stock!</p>
                </MUIAlert>
            )}
        </div>
    );
};
