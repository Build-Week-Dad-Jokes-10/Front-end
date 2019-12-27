import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { UserContext }  from '../contexts/UserContext';
import { Container, Card, Button } from 'reactstrap';
import MainHeader from './MainHeader';

const Settings = props => {
    const { user, setUser } = useContext(UserContext);
    const buttonStyle = {
        marginTop: '3%',
        backgroundColor: "#EBC700",
        color: "#380a15",
        fontWeight: "bold"
    }
    return (
        <>
            <MainHeader />
            <Container>
                <Card
                    style={{
                        display: 'flex',
                        backgroundColor: '#2670C5',
                        marginTop: '5%',
                        height: '70vh'
                    }}
                >
                    <h2>Settings</h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-evenly'
                    }}>
                        <Button
                        style={buttonStyle}
                        >Change your Username</Button>
                        <Button style={buttonStyle}>Change your Password</Button>
                    </div>
                </Card>
            </Container>
        </>
    )
}
export default Settings;