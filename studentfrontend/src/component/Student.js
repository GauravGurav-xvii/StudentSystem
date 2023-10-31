import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper } from '@mui/material';
import Button from '@mui/material/Button';

export default function Student() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' }
    const [name, setname] = React.useState("");
    const [address, setAddress] = React.useState('');
    const [students, setStudents] = React.useState([]);

    const handleClick = (e) => {
        e.preventDefault()
        const student = { name, address }
        console.log(student);
        fetch("http://localhost:8090/student/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        }).then(() => {
            console.log("New Student Added.");
        })
        // handleClick.remove.actionListner();
    }

    React.useEffect(() => {
        fetch("http://localhost:8090/student/getAll")
            .then(Response => Response.json())
            .then((result) => {
                setStudents(result);
            });
    },[]);


    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 1 },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button variant="contained" onClick={handleClick}
                        onSubmit={(e)=> setStudents({name:'' , address:''})}>Submit</Button>
                </Box>
            </Paper>
            <h1>Students</h1>
            <Paper elevation={6} style={paperStyle}>
                    {students.map(student =>(
                        <paper elevation={6} key={student.id} style={{ margin:"10px", padding:"15px", textAlign:"left" }} >
                            Id:{student.id}<br></br>
                            Name:{student.name}<br></br>
                            Address:{student.address}<br></br>                   
                        </paper>
                    ))}
            </Paper>
        </Container>
    );
}
