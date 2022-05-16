import { useState, createRef } from "react"
import { LayoutComponents } from "../components/LayoutComponents"
import { Link } from 'react-router-dom';
import axios from "axios";
import { history } from "../history";
import MyInput from '../components/MyInput'

export const Register = () => {
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
            await axios.post(`/api/Usuario`, {
                nome: getInputNomeRef().getValue(),
                login: getInputLoginRef().getValue(),
                senha: getInputSenhaRef().getValue()
            });

            alert('Cadastrado com Sucesso!')
        } catch {
            alert('Cadastrado falhou!');
        }
    };

    return (
        <LayoutComponents>
            <div className="login-form">
                <span className="login-form-title">Criar Conta</span>
                <span className="login-form-title">

                </span>
                <div className="wrap-input">
                    <MyInput
                        ref={inputNomeRef}
                    />
                </div>
                <div className="wrap-input">
                    <MyInput
                        ref={inputLoginRef}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                </div>
                <div className="wrap-input">

                    <MyInput
                        ref={inputSenhaRef}
                    />
                    <span className="focus-input" data-placeholder="Senha"></span>
                </div>
                < div className="container-login-form-btn"
                    onClick={handleOnButtonSaveClick}>
                    <button className="login-form-btn">Salvar </button>
                </div>
                <div className="text-center">
                    <span className="txt1">Já possui conta?</span>

                    <Link className="txt2" to="/login">Acessar com Email e senha</Link>
                </div>
            </div>
        </LayoutComponents>
    )
}