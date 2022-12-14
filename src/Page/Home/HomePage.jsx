import * as React from 'react';
import { Box } from '@mui/material';

import './HomePage.css';
/* import CardRolOption from './Components/CardRolOption'; */
import Login from './Components/Login';


const HomePage = () => {
    return (
        <Box>
            <div style={{ minHeight: "100vh" }}>
                <div>
                    <img src='/image/bg.png' style={{ maxWidth: "70vw" }}></img>
                </div>
                <div className="section hpanel leftpan">
                    <div className="background-img">
                        <div className='cardImgContainer'>
                            <img src='/image/Logo-Kruger_banner1.gif' className='imgDimension'></img>

                        </div>
                    </div>
                </div>
                <div style={{ display: "flex", position: "fixed", bottom: "0px" }}>
                    <img src='/image/bg.png' style={{ maxWidth: "70vw" }}></img>
                </div>
            </div>


            <div className="section hpanel rightpan">
                <div className="background-img">
                    <div className="background-img-R">
                        <div className='cardRolContainer'>
                            <span className='textRightpan'>What is your role?</span>
                            <Login />

                        </div>
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default HomePage;
