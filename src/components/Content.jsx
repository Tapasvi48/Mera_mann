import React from "react";
import "./Content.css";
import imge from "../image/r1.jpg";
function Content(){

return(
<div >
<div className="Content">
<h1 className="head">
Mera Mann
</h1>
</div>
<div className="image">
<img src={imge}/>
</div>
</div>
);
}
export default Content;