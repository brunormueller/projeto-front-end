import {
    useState,
} from 'react';
import {
    Button,
} from '@material-ui/core';

function MyButton(props) {
    const {
        text,
        increment,
        setTitle,
        onClick,
    } = props;

    const [count, setCount] = useState(0);

    const handleOnClick = event => {
        if (onClick) {
            onClick(event);
        } else {
            setTitle(text);
            setCount(count + increment);
        }
    };

    return (
        <Button
            variant='contained'
            color='primary'
            onClick={handleOnClick}
        >
            {!!increment ? `${text}: ${count}` : text}
        </Button>
    );
}

export default MyButton;