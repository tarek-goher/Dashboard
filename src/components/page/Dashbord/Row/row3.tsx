import {  Paper, Stack, Typography, useTheme,  } from "@mui/material";
import Pie from "../../PieChart/pie";
import Bar from "../../BarChart/bar";
import Network from "./AreaBump";

const Row3=()=>{
    const them=useTheme()
    return(
<Stack direction={"row"}   flexWrap={"wrap"} gap={3}  mt={3}>
    <Paper  sx={{width:"32%" , minWidth:"400px" , flexGrow:1}}>

    <Typography variant="h6"  color={them.palette.secondary.main} sx={{padding:"30px 30px 0 30px" , textAlign:"center"}} fontWeight={600}>
            Campaing
        </Typography>

        <Pie isDashboard={true}/>

         <Typography variant="h6" align="center" sx={{mt:"15px", }}>
            $48.352 revenue generated
         </Typography>
         <Typography variant="body2" px={0.7} pb={3} align="center">
            Includes extra misc expenditures and costs 
         </Typography>
    </Paper>
    <Paper  sx={{width:"32%" , minWidth:"400px" , flexGrow:1 }}>
        <Typography variant="h6"  color={them.palette .secondary.main} fontWeight={600} sx={{padding:"30px 30px 0 30px" , textAlign:"center"}}>
            Sales Quantity
        </Typography>

        <Bar  isDashboard={true}/>
    </Paper>
    <Paper  sx={{width:"32%" , minWidth:"400px" , flexGrow:1}}> 
    <Typography variant="h6"  color={them.palette .secondary.main} fontWeight={600} sx={{padding:"30px 30px 0 30px" , mb:5, textAlign:"center"}}>
    Network
        </Typography>
        <Network/>
    </Paper>
</Stack>
    )
   }
   export default Row3 ;