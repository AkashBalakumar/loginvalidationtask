import React from "react";
import {Grid,Paper,TextField,FormControlLabel,Checkbox,Button,Typography,Link} from '@mui/material'
import LockIcon from '@mui/icons-material/Lock';
import { useState ,useEffect} from "react";


function Login() {

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const initialValues = {username:"", password:"" };
    const [formValues, setFormValues] =useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]= useState(false);

    const handleChange =(e) =>{
       setFormValues({...formValues,[e.target.name]: e.target.value});
    };
    console.log(formValues);
     
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFormErrors(Validate(formValues));
        setIsSubmit(true);
        
        

       

    };
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length ===0 && isSubmit){
            console.log(formErrors);
        }
        
    },[formErrors])
    const Validate=(values) =>{
        const errors ={};
        if(!values.username){
            errors.username="Username is required"
        }
        else if((values.username.length<=10) &&(values.username.length>=5)){ 
            errors.username= "Username should be greater than 5characters"
          }
        
        if(!values.password){
            errors.password ="password is required!"
            } else if (values.password.length < 8) {
                errors.password="password sholud be greater than 8 characters"
            
            }
            return errors;
            };
    return(
        <Grid>
            <Paper  elevation={10} style={paperStyle}>
                <Grid align='center'>
                < LockIcon/>
                <h2>Sign in</h2> 
                </Grid>
                 <TextField  style={{marginBottom:"2vh"}}
                 label='Username' placeholder='Enter username' fullWidth value={formValues.username}  name="username" onChange={handleChange}/>
                 <p style={{color:"red"}}>{formErrors.username}</p>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth value={formValues.password} name="password" onChange={handleChange}/>
                <p style={{color:"red"}}>{formErrors.password}</p>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                
                  <Button  style={{marginBottom:"2vh"}}type='submit'color='primary'  variant="contained" fullWidth onClick={handleSubmit} >submit</Button>
                  <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="welcome.html" >
                        Sign Up 
                </Link>
                </Typography>
                
           

            

            </Paper>
        </Grid>
    )
};
export default Login;