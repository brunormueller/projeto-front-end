import {
    forwardRef,
    useImperativeHandle,
    useState,
} from 'react';

const MyTitle = forwardRef((props, ref) => {
    const {
        defaultTitle,
    } = props;

    const [title, setTitle] = useState(defaultTitle);

    useImperativeHandle(ref, () => ({
        setTitle,
    }));

    return title;
});

export default MyTitle;