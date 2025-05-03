import { useState } from "react";
import "./App"

function ThemeToggle (){
 const [dark, setDark]=useState(false);


return (
    <div className={dark ? 'dark' : 'light'}>
        <h2>{dark ? 'Yagty tema' : 'Garanky tema'}</h2>
        <button onClick={()=> setDark(!dark)}>Temany calysmak</button>
    </div>
)
}
export default ThemeToggle;