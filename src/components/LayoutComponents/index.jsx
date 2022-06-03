export const LayoutComponents = (props) => {
    const {
        customNome1Style,
        customNome2Style,
    } = props;

    return (
        <div style={{
            width: '100%',
            margin: '0 auto',
        }}>
            <div style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '15px',
                backgroundColor: 'rgb(255, 253, 253)',

                // porta de entra pra sobreescrever parametros
                ...customNome1Style
            }}>
                <div style={{
                        width: '40%',
                        backgroundColor: 'rgb(210, 205, 205)',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        padding: '77px 55px 33px 55px',
                        boxShadow: '0 5px 10px 0px rgba(0, 0, 0, 0.2)',

                        // porta de entra pra sobreescrever parametros
                        ...customNome2Style
                }}>
                    {props.children}
                </div>
            </div>

        </div>
    )
}