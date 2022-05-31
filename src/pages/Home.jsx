// import MyButton from '../components/MyButton';
// import MyInput from '../components/MyInput';
// import MyDataGrid from '../components/MyDataGrid';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from "axios";

import {
    createRef,
    useRef,
    useState,
} from 'react';
import Routes from "../Routes";
import JodiEditor from "jodit-react";

import { HomeComponents } from '../components/LayoutComponents/HomeComponents';

export function Home() {
    const inputDescricaoRef = createRef();
    const inputTituloRef = createRef();

    const getInputDescricaoRef = () => {
        return inputDescricaoRef.current;
    };

    const getInputTituloRef = () => {
        return inputTituloRef.current;
    };
    const handleOnButtonSaveClick = async () => {
        try {
            await axios.post('/api/Documento', {

                login: getInputTituloRef().getValue(),
                senha: getInputDescricaoRef().getValue()
            });
            alert('Postado com Sucesso!')
        } catch {
            alert('Post falhou!')
        }
    };

    const editor = {
        height: "100",
        toolbarAdaptive: true

    }

    const [content, setContent] = useState('')

    const config = {
        readonly: false,
        height: 400
    }

    const handleUpdate = (event) => {
        const editorContent = event.target.value
        setContent(editorContent)
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '49ch',
            },
        },
    }));


    const classes = useStyles();  //Titulo

    return (
        <HomeComponents>
            <div className='App'>
                <div className={classes.root} noValidate autoComplete="off">
                    <TextField id="outlined-basic" label="Título" variant="outlined" />

                </div>
                <JodiEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={handleUpdate}
                    onChange={(newContent) => { }}
                />
            </div>
            < div className="container-login-form-btn"
            onClick={handleOnButtonSaveClick}>
                <button className="login-form-btn">Postar </button>
            </div>

        </HomeComponents>
    )
}


