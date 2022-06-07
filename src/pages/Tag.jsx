import { createRef } from "react"
import { LayoutComponents } from "../components/LayoutComponents"
import axios from "axios";
import MyInput from '../components/MyInput'
import '../components/LayoutComponents/tag.css';
import MyDataGrid from "../components/MyDataGrid";
import Title from "../components/Title";


export const Tag = () => {
    const inputTagRef = createRef();

    const getInputTagRef = () => {
        return inputTagRef.current;
    };

    const handleOnButtonSaveClick = async () => {
        try {
            await axios.post(`/api/Tag`, {
                Nome: getInputTagRef().getValue()
            });
            alert('Cadastrado com Sucesso!')
        } catch {
            alert('Cadastrado falhou!');
        }
    };

    const handleOnButtonKillClick = async () => {
        try {
            await axios.post(`/api/Tag`, {
                Nome: getInputTagRef().getValue()
            });
            alert('Excluido com Sucesso!')
        } catch {
            alert('Exclusão falhou!');
        }
    };
    return (
        <LayoutComponents
        customNome1Style={{
            padding: '35px 35px 35px 35px',
        }}
        >
            <MyDataGrid
                title='Tag'
                baseURL='api/TbAluno'
                idColumnName='id'
                    columns={[
                        {
                            field: 'id',
                            headerName: 'ID',
                            width: 90,
                        },
                        {
                            field: 'nome',
                            headerName: 'Nome',
                            flex: 1,
                        },
                ]}
            />
        </LayoutComponents>
    )
}