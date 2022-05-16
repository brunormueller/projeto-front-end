import { useState, createRef } from "react";
import Routes from "../Routes";
import { history } from "../history";
import axios from "axios";
import '../styles.css';
import { Link } from 'react-router-dom';
import { LayoutComponents } from "../components/LayoutComponents";
import MyInput from "../components/MyInput";

export const Login = () => {
    const inputLoginRef = createRef();
    const inputNomeRef = createRef();
    const inputSenhaRef = createRef();

    const getInputNomeRef = () => {
        return inputNomeRef.current;
    };

    const getInputLoginRef = () => {
        return inputLoginRef.current;
    };

    const getInputSenhaRef = () => {
        return inputSenhaRef.current;
    };

    const handleOnButtonSaveClick = async () => {
        try {

          await axios.get('/api/Usuario', {
                
                login: getInputLoginRef().getValue(),
                senha: getInputSenhaRef().getValue()
            });
            alert('login com Sucesso!')
        } catch {
            alert('login falhou!')
        }
    };
    return (

        <LayoutComponents>
            <div className="login-form">
                <span className="login-form-title">Bem Vindo!</span>
                <span className="login-form-title">
                </span>
                <div className="wrap-input">
                    <MyInput
                        ref={inputLoginRef}
                    />
                </div>
                <div className="wrap-input">
                    <MyInput
                        ref={inputSenhaRef}
                    />
                </div>
                < div className="container-login-form-btn"
                    onClick={handleOnButtonSaveClick}>
                    <button className="login-form-btn">Login</button>
                </div>
                <div className="text-center">
                    <span className="txt1">Não possui conta?</span>

                    <Link className="txt2" to="/register">Criar Conta</Link>
                </div>
            </div>
        </LayoutComponents>

    );

}