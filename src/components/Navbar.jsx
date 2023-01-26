import React from "react";
import "./Navbar.css";
import imge from "../image/imge.jpg";
import Avatar from '@mui/material/Avatar';
const style={



}

function Navbar(){return(
<div>
<div className="nav">
<li>

   Home 
</li>
<li>
About Us
</li>
<li>
Blogs
</li>
<li>
Campaigns
</li>
<li>
Contact
</li>
<li>
Posts 
</li>
<div className="avatar">
<Avatar alt="Remy Sharp" classes={style} src={imge} sx={{ width: 64, height: 64 }}/>
</div>
</div>

</div>

);
}
export default Navbar;