import { Link } from 'react-router-dom'
import { Button} from "@mui/joy";
import Drawer from '@mui/joy/Drawer';
import IconButton from '@mui/joy/IconButton';
import ModalClose from '@mui/joy/ModalClose';
import Box from '@mui/joy/Box';
import Menu from '@mui/icons-material/Menu';
import { useState } from 'react';

export default function Header() {

const [open,setOpen] = useState(false);  

const handleLinkClick = () => {
  setOpen(false)
}


  return (<>
   
    <div className="flex justify-between items-center px-6 bg-(--purple-white) h-18">
      <div>
      <IconButton variant="outlined" color="neutral" onClick={()=> setOpen(true)}>    
        < Menu />
      </IconButton>
      
      <Drawer  open={open} onClose={() => setOpen(false)} >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            ml: 'auto',
            mt: 1,
            mr: 2, }}>
         
        <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
           <ul className="flex text-xl bg-(--purple-dark) h-full flex-col text-center gap-12 pt-18 mt-[-40px] text-(--orange-main) font-kanit font-bold">
            <li><Link to="/" onClick={handleLinkClick}>HOME</Link></li> 
            <li><Link to="/feed" onClick={handleLinkClick}>FEED</Link></li> 
            <li><Link to="/profile" onClick={handleLinkClick}>PROFILE</Link></li>
            <li><Link to="/categories" onClick={handleLinkClick}>CATEGORIES</Link></li>
            <li><Link to="/about" onClick={handleLinkClick}>ABOUT US</Link></li>
            <li><Link to="/faq" onClick={handleLinkClick}>FAQ</Link></li>
            </ul>

          <p className="pb-12 text-sm text-center bg-(--purple-dark) text-(--purple-lighter)">all rights reserved © FEDFELT</p>

      </Drawer>
     </div>
  
   <Button component={Link} to="/login" variant="solid" color="primary">
    LOG IN
  </Button>
    </div></>
  )
}
