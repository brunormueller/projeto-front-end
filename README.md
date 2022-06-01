## Processo pra começar o desenvolvimento

1° git pull -> update dos arquivos/Atualizar os arquivos

	desenvolvimento

2° git  add . -> adiciona/prepara todos os arquivos pra commit ()

3° git commit -m "mensagem de commiti" ->  envia pra repositorio loca

4° git push -> envia para o cervidor o que foi commitado

## Link backend
https://github.com/brunormueller/base-conhecimento

## link de novos componentes 
https://v4.mui.com/pt/components/pickers/


## novo metodo de estilizar

abre a div
 
declara Style com duas chaves 

declara os estilos

fechas as duas chaves

	<div stule{{
		novo estilo
	}}>

## como alterar o css de um componente

1 ----> Dentro da função declarar por onde "entra" os dados podendo ser algo novo ou para sobre escrever o que já existe

export const nomeComponente = (props) => {
    const {
        customNome1Style,
        customNome2Style,
    }=props;


2 --------------> no estilo e clarrado com 3 pontos o que foi a cima(1)

Seguindo o novo metodo de estilizar as divis, colocar 3 pontos e o nome da custon

    <div
        style={{
        ...customNome1Style
    }}>
		<div style={{
			...customNome2Style
		}}>


3 --------------> na chamada do conponente é declarado qual "variavel" criada no (1) vai ser usada, e passado os novos/mesmos estilos
	
	<nomeComponente 
	
	customNome1Style={{
        novoParametro,
    }}

	customNome1Style={{
        novoParametro,
    }}>