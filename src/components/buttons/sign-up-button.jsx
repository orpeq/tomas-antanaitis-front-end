import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const SignUpButton = styled(Button)(() => ({
  background: '#16dfb5',
  borderTopLeftRadius: '4px',
  borderTopRightRadius: '50px',
  borderBottomRightRadius: '50px',
  borderBottomLeftRadius: '50px',
  color: 'white',
  textTransform: 'none',
  fontWeight: 400,
  width: '145px',
  height: '50px',
  fontSize: '18px',
  textAlign: 'center',
  display: 'flex',
  cursor: 'pointer',
  ':hover': {
    color: '#16dfb5',
    background: 'white',
    border: `1px solid #16dfb5`,
    transition: '.2s ease-out',
  },
}));

export default SignUpButton;
