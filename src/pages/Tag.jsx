import { createRef } from "react"
import { LayoutComponents } from "../components/LayoutComponents"
import axios from "axios";
import MyInput from '../components/MyInput'
import '../components/LayoutComponents/tag.css';
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
                alignItems: 'baseline',
                backgroundColor: 'red',
            }}
        >
            <div className="login-form">
                <Title>Consulta de Tag</Title>

                <div className="container-login-form-btn-consutar"
                    onClick={handleOnButtonKillClick}>
                    <button className="login-form-btn">Consutar</button>
                </div>
            </div>
        </LayoutComponents>
    )
}