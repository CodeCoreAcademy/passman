import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import ResponsiveAppBar from './Components/Appbar';
import './style.css';

export default function App() {
    const [data, setData] = useState([
        // createData('Facebook', 'mysexygirlfriend', dataDel),
        // createData('Facebook', 'mysexygirlfriend', dataDel),
        // createData('Facebook', 'mysexygirlfriend', dataDel),
        {
            name:'Facebook',
            pass:'234234234',
        }
    ])
    const [name, setName] = useState('')
    const [pass, setPass] = useState('')
    const save = ()=>{
        // console.log(name, pass)
        setData((prev)=>[...prev, {name:name, pass:pass}])
    }
  return (
    <div>
      <ResponsiveAppBar />
        <TextField id="outlined-basic" label="App name" variant="outlined" value={name} onChange = {(e)=>setName(e.target.value)}/>
        <br/>
        <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange = {(e)=>setPass(e.target.value)}/>
        <br/>
        <Button variant="contained" onClick={save}>Save</Button>

        <hr/>
        <Box>
            <CustomizedTables data = {data} setData={setData}/>
        </Box>
    </div>
  )
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
//   function createData(name, pass, delfunc) {
//     return { name, pass, delfunc };
//   }
  
  

  
function CustomizedTables(props) {
    function dataDel(ind){
        // console.log(props.data[ind])
        props.setData(prev=>[...prev.slice(0, ind), ...prev.slice(ind+1)])
    }
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>App Name</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row, ind) => (
              <StyledTableRow key={ind}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.pass}</StyledTableCell>
                <StyledTableCell align="right">
                    <Button onClick={()=>dataDel(ind)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
