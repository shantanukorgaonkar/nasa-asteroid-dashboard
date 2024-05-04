import { Button as MuiButton, ButtonProps } from '@mui/material';
import { styled } from "@mui/material/styles";

const Button = ({ children, sx, variant, size, fullWidth, color,startIcon, ...props }: ButtonProps) => {
    const StyledButton = styled(MuiButton)<ButtonProps>(({ theme }) => ({
        borderRadius: "8px",
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.secondary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText
        },
        '&.MuiButton-outlined': {
            background: 'transparent',
            color: theme.palette.secondary.contrastText,
            '&:hover': {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText
            },
        },
        '&.MuiButton-text': {
            background: 'transparent',
            color: theme.palette.secondary.contrastText,
        },
    }))

    return (
        <StyledButton
            sx={sx ? sx : undefined}
            fullWidth={fullWidth == undefined ? true : fullWidth}
            variant={variant ? variant : 'contained'}
            size={size ? size : 'large'}
            color={color ? color : 'primary'}
            startIcon={startIcon?startIcon:undefined}
            {...props}>
            {children}
        </StyledButton>
    )
}
export default Button