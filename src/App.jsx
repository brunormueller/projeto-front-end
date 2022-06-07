import {
    createRef,
    useRef,
} from 'react';
import axios from 'axios';
import Routes from "./Routes";
import MyButton from './components/MyButton';
import MyInput from './components/MyInput';
import MyDataGrid from './components/MyDataGrid';
import MiniDrawer from './components/MyMenu';
import { Link, Switch } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import { Login } from './pages/Login';




export default function App() {



    const inputNameRef = createRef();
    const alunoMyDataGridRef = createRef();

    const selectedRowId = useRef(null);

    const getInputNameRef = () => {
        return inputNameRef.current;
    };

    const getAlunoMyDataGridRef = () => {
        return alunoMyDataGridRef.current;
    };

    const setSelectedRowId = rowId => {
        selectedRowId.current = rowId;
    };

    const getSelectedRowId = () => {
        return selectedRowId.current;
    };

    const handleOnMyDataGridUpdateRow = (rowId, rowData) => {
        setSelectedRowId(rowId);

        getInputNameRef().setValue(rowData.nome);
    };

    const handleOnButtonSaveClick = async () => {
        let rowId = getSelectedRowId();

        if (rowId) {
            await axios.put(`/api/TbAluno/${rowId}`, {
                id: rowId,
                nome: getInputNameRef().getValue(),
            });

            setSelectedRowId(null);
        } else {
            await axios.post('/api/TbAluno', {
                nome: getInputNameRef().getValue(),
            });
        }

        getAlunoMyDataGridRef().getData();
        getInputNameRef().setValue('');
    };


    return (
        <Routes/>
    );
}


