import { Card, CardContent, Button } from '@mui/material';
import * as React from 'react';
import { AdminPanelSettings, AssignmentInd } from '@mui/icons-material';
import { useDispatch } from 'react-redux';

import { setRolUser } from '../../../Redux/StoreComponents/roleSelection';
import "./CardRolOption.css"

const CardRolOption = (props) => {

    const dispatch = useDispatch();

    return (
        <Button className='CardButtonContainer' onClick={() => dispatch(setRolUser(props.rol))}>
            <Card sx={{ minWidth: 275, borderRadius: "10px" }}>
                <CardContent className='CardRolOptionContent'>
                    <div className='iconRolOption'>
                        {
                            (props.id === 1)
                                ? <AdminPanelSettings sx={{ fontSize: "2rem" }} />
                                : <AssignmentInd sx={{ fontSize: "2rem" }} />
                        }
                    </div>
                    <div className='textRolOption'>
                        <span>{props.rol}</span>
                    </div>
                </CardContent>
            </Card>
        </Button>
    )
}

export default CardRolOption