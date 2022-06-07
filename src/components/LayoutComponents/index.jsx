import styled from 'styled-components';

const MainDiv = styled.div`
    width: 100%;
    margin: 0 auto;
`;

const ContainerDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    align-items: ${props => props.alignItems || 'center'};
    justify-content: center;
    padding: ${props => props.padding || '15px'};
    background-color: ${props => props.backgroundColor || 'rgb(255, 253, 253)'};
`;

const ContentDiv = styled.div`
    width: 40%;
    background-color: rgb(210, 205, 205);
    border-radius: 10px;
    overflow: hidden;
    padding: 77px 55px 33px 55px;
    box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
`;

export const LayoutComponents = (props) => {
<<<<<<< HEAD

    const {
        customStyle,
    }=props;

    return (
        <div className="container">
            <div style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                backgroundColor: 'rgb(255, 253, 253)',
            }}>
            <div style={{
                    width: '70%',
                    backgroundColor: 'rgb(210, 205, 205)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    padding: '77px 55px 33px 55px',
                    boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.2)',
                    ...customStyle
            }}>
                {props.children}
            </div>
            </div>
            
        </div>
=======
    const {
        customNome1Style,
    } = props;

    return (
        <MainDiv>
            <ContainerDiv
                alignItems={customNome1Style ? customNome1Style.alignItems : ''}
                backgroundColor={customNome1Style ? customNome1Style.backgroundColor : ''}
                padding={customNome1Style ? customNome1Style.padding : ''}
            >
                <ContentDiv>
                    {props.children}
                </ContentDiv>
            </ContainerDiv>
        </MainDiv>
>>>>>>> 5505fb15b915de9e492ab66e71e9e6afb5b7c8d0
    )
}