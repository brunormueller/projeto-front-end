import './styles.css';

export const LayoutComponents = (props) => {

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
                    width: '40%',
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
    )
}