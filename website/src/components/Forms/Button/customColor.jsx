import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { LoadingButton } from '@mui/lab';

const ColorButton = styled(Button)({
    
    backgroundColor: '#00a9ff',
    '&:hover': {
        backgroundColor: '#0087cc',
    },
});

const ColorButtonGray = styled(Button)({
    backgroundColor: '#d1d5db',
    '&:hover': {
        backgroundColor: '#9ca3af',
    },
});

const ColorButtonLoading = styled(LoadingButton)({
    borderRadius: '10px',
    backgroundColor: '#00a9ff',
    '&:hover': {
        color: '#A2C4D9',
        backgroundColor: '#2F486C',
    },
});

// eslint-disable-next-line react/prop-types
function CustomButton({ children, ...props }) {
    return <ColorButton {...props}>{children}</ColorButton>;
}

export function CustomButtonGray({ children, ...props }) {
    return <ColorButtonGray {...props}>{children}</ColorButtonGray>;
}

// eslint-disable-next-line react/prop-types
export function CustomLoadingButton({ children, ...props }) {
    return <ColorButtonLoading {...props}>{children}</ColorButtonLoading>;
}

export default CustomButton;