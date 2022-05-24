import { createRef } from "react"
import { LayoutComponents } from "../components/LayoutComponents"
import axios from "axios";
import MyInput from '../components/MyInput'

export const Tag = () => {
    const inputTagRef = createRef();

    const getInputTagRef = () => {
        return inputTagRef.current;
    };

    const handleOnButtonSaveClick = async () => {
        
        console.log("handleOnButtonSaveClick");
        
        try {
            await axios.post(`/api/Tag`, {
                Nome: getInputTagRef().getValue()
            });

            alert('Cadastrado com Sucesso!')
            
        } catch {
            alert('Cadastrado falhou!');
        }
    };

    return (
        <LayoutComponents>
            <div className="login-form">
                <span className="login-form-title">Cadastrar Tag</span>
                <span className="login-form-title">

                </span>
                <div className="wrap-input">
                    <MyInput
                        ref={inputTagRef}
                    />
                     <span className="focus-input" data-placeholder="Tag"></span>
                </div>

                < div className="container-login-form-btn"
                    onClick={handleOnButtonSaveClick}>
                    <button className="login-form-btn">Salvar</button>
                </div>
            </div>
        </LayoutComponents>
    )
}