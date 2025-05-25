import React, { useState } from "react";
import './../App.css';

function Button ({className, children, onClick, animated}) {
    var [shrink, setShrink] = useState(0)

    return <div className={`Button ${className}`}>
        <div className="exterior">
            <div className={`interior ${animated && "animated"}`}
                onClick={()=>{
                        setShrink(1) 
                        onClick()
                    }}
                onAnimationEnd={()=>setShrink(0)}
                shrink={shrink}>
                {children}
            </div>
        </div>
    </div>
}

export default Button