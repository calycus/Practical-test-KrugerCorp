import { Button, Box, CardActions, TextField } from '@mui/material';
import * as React from 'react';
import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getDataUserLogin } from '../../../Redux/StoreComponents/login';
import "./Login.css"


const Login = () => {
    const theme = useTheme()
    const dispatch = useDispatch();
    const history = useNavigate();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="login-box">
            <div style={{ display: "flex", justifyContent: "center", paddingBottom: "1rem" }}>
                <img style={{ minWidth: '180px', maxWidth: '180px' }} src='/image/logo-con-slogan.png'></img>
            </div>
            <Box className="boxContainer">
                <div className="user-box">
                    <TextField onChange={e => setUserName(e.target.value)}
                        className="loginTextFile"
                        sx={{ width: "100%" }}
                        id="standard-basic"
                        label="User"
                        variant="standard"
                        color="logo"
                    />
                </div>
                <div className="user-box">
                    <TextField onChange={e => setPassword(e.target.value)}
                        className="loginTextFile"
                        sx={{ width: "100%" }}
                        id="standard-basic"
                        label="Password"
                        variant="standard"
                        color="logo"
                    />
                </div>
                <CardActions sx={{ paddingTop: "2rem" }}>
                    <Button onClick={() => getData(userName, password, dispatch)}
                        variant="outlined"
                        color="logo"
                        sx={{ fontWeight: "bolder" }}
                    >
                        Iniciar Sesión
                    </Button>
                </CardActions>
            </Box>
        </div>
    )
}

export default Login

const getData = (userName, password, dispatch) => {
    dispatch(getDataUserLogin(userName, password))
}

