import { Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText } from '@mui/material';

const CardError = ({ fromError, handleCardError }) => {
    return (
        <div>
            <Dialog
                open={fromError}
                onClose={handleCardError}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleCardError(false)}>Aceptar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CardError