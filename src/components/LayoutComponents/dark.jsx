import "./dark.css"

export function DarkTheme() {
    return (
        <div>
            <input type="checkbox" className="checkbox" id="chk" />
            <label className="label" for="chk">
                <i className="fas fa-moon"></i>
                <i className="fas fa-sun"></i>
                <div className="ball"></div>
            </label>


        </div>
    )
}