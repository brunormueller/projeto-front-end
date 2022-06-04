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
    )
}