import { Dialog, DialogContent, Stack, Typography, Button as MuiButton } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { AiOutlineCheckCircle } from "react-icons/ai";
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Create a custom theme
const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif', // Change the font family here to your preferred font
    },
});
interface Props {
    title: string;
    open: boolean;
    handleClose: (status: boolean) => void;
}


export default function AlertDelete({ title, open, handleClose }: Props) {

    return (
        <ThemeProvider theme={theme}>
            <Dialog
                open={open}
                onClose={() => handleClose(false)}
                keepMounted
                maxWidth="xs"
                aria-labelledby="column-delete-title"
                aria-describedby="column-delete-description"
            >
                <DialogContent sx={{ mt: 2, my: 1 }}>
                    <Stack alignItems="center" spacing={3.5}>
                        <AiOutlineCheckCircle style={{ color: 'green' }} size={100} />

                        <Stack spacing={2}>

                            <Typography align="center">
                                Selected item
                                <Typography variant="subtitle1" component="span">
                                    {' '}
                                    "{title}"{' '}
                                </Typography>
                                successfully!
                            </Typography>
                        </Stack>

                        <Stack direction="row" spacing={2} sx={{ width: 1 }}>
                            <MuiButton color="secondary" fullWidth onClick={() => handleClose(false)} variant="outlined">
                                Cancel
                            </MuiButton>
                            <MuiButton fullWidth color="success" variant="contained" onClick={() => {
                                //DELETE API Call here 
                                handleClose(true)
                            }} autoFocus startIcon={<ThumbUpOffAltIcon />}>
                                Great!
                            </MuiButton>
                        </Stack>
                    </Stack>
                </DialogContent>
            </Dialog >
        </ThemeProvider>
    );
}
