import styled from 'styled-components';

const Button = styled.button(props => ({
  padding: '0.5em',
  'background-color': props.color,
  border: 'none',
  color: 'white',
  'border-radius': '0.25em',
  margin: '0.25em',

  '&:hover': {
    'background-color': 'green',
  },
}));

export default Button;
