import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';
import MyDataGrid from '../components/MyDataGrid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import {
    createRef,
    useRef,
    useState,
} from 'react';
import Routes from "../Routes";
import JodiEditor from "jodit-react";

import { LayoutComponents } from '../components/LayoutComponents';

export function Home() {

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

    return (
        <LayoutComponents>
            <div className='App'>
                <JodiEditor
                    ref={editor}
                    value={content}
                    config={config}
                    onBlur={handleUpdate}
                    onChange={(newContent) => { }}
                />
            </div>
            < div className="container-login-form-btn">
            
                <button className="login-form-btn">Postar </button>
            </div>
            
        </LayoutComponents>
    )
}


