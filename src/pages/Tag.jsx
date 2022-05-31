import { createRef } from "react"
import { LayoutComponents } from "../components/LayoutComponents"
import axios from "axios";
import MyInput from '../components/MyInput'
import '../components/LayoutComponents/tag.css';

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
        <LayoutComponents>
            <div className="login-form">
                <span className="login-form-title">Tag</span>
                <span className="login-form-title"></span>

                {/* 
                <div className="wrap-input">
                    <MyInput
                        ref={inputTagRef}
                    />
                     <span className="focus-input" data-placeholder="Tag"></span>
                </div> */}

                <div className="container-login-form-btn-consutar"
                    onClick={handleOnButtonKillClick}>
                    <button className="login-form-btn">Consutar</button>
                </div>

                {/* < div className="container-login-form-btn-salvar"
                    onClick={handleOnButtonSaveClick}>
                    <button className="login-form-btn">Salvar</button>
                </div>

                <div className="container-login-form-btn-excluir"
                    onClick={handleOnButtonKillClick}>
                    <button className="login-form-btn">Excluir</button>
                </div> */}

            </div>
        </LayoutComponents>
    )
}