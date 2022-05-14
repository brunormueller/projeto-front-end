import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyDataGrid from './components/MyDataGrid';
import MiniDrawer from './components/MyMenu';
import {
    createRef,
    useRef,
    useState,
} from 'react';
import Routes from "./Routes";
import JodiEditor from "jodit-react";
import './styles.css'

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
        <div className='App'>
            <JodiEditor
                ref={editor}
                value={content}
                config={config}
                onBlur={handleUpdate}
                onChange={(newContent) => { }}
            />
        </div>

    )
}


