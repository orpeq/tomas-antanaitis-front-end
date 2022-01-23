import { styled } from '@mui/material/styles';
import { Link } from '@mui/material';

const LinkButton = styled(Link)(({ theme }) => ({
  background: 'none',
  border: 'none',
  paddingLeft: theme.spacing(7),
  color: '#7F88A0',
  fontSize: '17px',
  textAlign: 'center',
  display: 'flex',
  textDecoration: 'none',
  cursor: 'pointer',
  ':hover': {
    color: '#16DFB5',
  },
}));

export default LinkButton;
