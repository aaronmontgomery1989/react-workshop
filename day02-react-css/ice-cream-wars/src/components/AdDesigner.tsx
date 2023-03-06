import { useState } from "react";
import "./AdDesigner.css";

const AdDesigner = () => {
    const [flavor, setFlavor] = useState<string>("Strawberry");
    const [darkTheme, setDarkTheme] = useState(true);
    const [fontSize, setFontSize] = useState(50);
    
    //const toggleDarkTheme = () => {
    //    setDarkTheme((prev) => !prev);
    //};

    return (
        <section className="AdDesigner">
            <h2>Ad Designer</h2>
            <div className={`ad ${darkTheme ? "dark" : ""}`}>
                <p>Vote for</p>
                <p className="flavor" style={{fontSize: fontSize + "px"}}>{flavor}</p>
            </div>
            <h3 style={{color: "black"}}>What to Support</h3>
            <div>
                <button onClick={() => setFlavor("Chocolate")} disabled>Chocolate</button>
                <button onClick={() => setFlavor("Vanilla")}>Vanilla</button>
                <button onClick={() => setFlavor("Strawberry")}>Strawberry</button>
            </div>
            <h3>Color Theme</h3>
            <div>
                <button onClick={() => setDarkTheme(false)}>Light</button>
                <button onClick={() => setDarkTheme(true)} disabled>Dark</button>
            </div>
            <h3>Font Size</h3>
            <div style={{ display:"flex" }}>
                {fontSize > 0 ? (
                    <button onClick={() => setFontSize((prev) => prev - 1)}>Down</button>
                    ) : (
                        <>{window.alert("you can't do negative font size!!!")}</>
                    )}
                <p>{fontSize}</p>
                <button onClick={() => setFontSize((prev) => prev + 1)}>Up</button>
            </div>
        </section>
    );
};

export default AdDesigner;
