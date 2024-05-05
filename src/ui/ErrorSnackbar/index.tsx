import CloseIcon from '@mui/icons-material/Close';
import { Button, IconButton, Snackbar, SnackbarContent } from '@mui/material';
import React from 'react';

interface Props {
    error: Error | undefined
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>
}

const ErrorSnackbar = ({ error, setError }: Props) => {

    const handleClose = () => {
        setError(undefined)
    }
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                OK
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <Snackbar
            open={!!error}
            autoHideDuration={3000}
            onClose={handleClose}
        >
            <SnackbarContent style={{ backgroundColor: 'red' }} message={error?.message} action={action} />
        </Snackbar>
    )
}

export default ErrorSnackbar