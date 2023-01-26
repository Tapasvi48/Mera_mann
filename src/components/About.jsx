import React from "react";
import "./About.css";
import doc from "../image/doc.jpg";
function About(){
return(
<div>
<div className="about">
<h2>
MeraMann Kare Man Ki Bat 
</h2>
<div className="doc">
<h4 className="head">
Our Experts
</h4>
<img className="image" src={doc}/>

</div>


</div>
</div>
);}
export default About;