import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { UserContext }  from '../contexts/UserContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Container, Label, Card, Button } from 'reactstrap';
import MainHeader from './MainHeader';

const Settings = props => {
    const { state, dispatch } = useContext(UserContext);
    const [newData, setNewData] = useState({username: state.user.username, password: state.user.password, confirm: state.user.password});
    const [err, setError] = useState('');

    const buttonStyle = {
        marginTop: '3%',
        backgroundColor: "#EBC700",
        color: "#380a15",
        fontWeight: "bold"
    }
    const modalStyle = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        color: "#380a15",
        padding: '2%'
    }
    const modalButton = {
        backgroundColor: "#EBC700",
        color: "#380a15",
        fontWeight: "bold",
        margin: '2%'
    }
    const [userModal, setUserModal] = useState(false);
    const [passModal, setPassModal] = useState(false);

    const userToggle = () => setUserModal(!userModal)
    const passToggle = () => setPassModal(!passModal)

    const handleChange = e => {
        e.preventDefault();
        setNewData({
            ...newData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(newData.password === newData.confirm) {
            // dispatch({ type: 'USER_CHANGE_START'})
            // axiosWithAuth()
            //     .put('', newData)
            //     .then(res => {
            //         const newUser = JSON.parse(res.config.data)
            //         console.log(newUser);
            //         dispatch({ type: 'USER_CHANGE_SUCCESS', payload: newUser})
            //     })
            //     .catch(err => {
            //         console.log(err.message);
            //         dispatch({ type: 'USER_CHANGE_FAIL', payload: err.message})
            //     })
        }
        else {
            setError('Passwords do not match.')
        }
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
                        style={buttonStyle} onClick={userToggle}
                        >Change your Username</Button>
                        <Modal isOpen={userModal} toggle={userToggle} className="change-user">
                            <ModalHeader toggle={userToggle}>Change Username</ModalHeader>
                            <Form onSubmit={handleSubmit}>
                            <FormGroup style={modalStyle}>
                                <Input
                                    type='text'
                                    name="username"
                                    placeholder="Username"
                                    value={newData.username}
                                    onChange={handleChange}
                                />
                                </FormGroup>
                                <Button style={modalButton}>Submit</Button>
                            </Form>
                        </Modal>
                        <Button style={buttonStyle} onClick={passToggle}>Change your Password</Button>
                        <Modal isOpen={passModal} toggle={passToggle} className="change-user">
                            <ModalHeader toggle={passToggle}>Change Password</ModalHeader>
                            <Form onSubmit={handleSubmit}>
                            <FormGroup style={modalStyle}>
                                <Input
                                    type='password'
                                    name="password"
                                    placeholder="Password"
                                    value={newData.password}
                                    onChange={handleChange}
                                />
                                <Input
                                    type='password'
                                    name="confirm"
                                    placeholder="Password"
                                    value={newData.confirm}
                                    onChange={handleChange}
                                />
                                </FormGroup>
                                <Button style={modalButton}>Submit</Button>
                                {err && <div className="error-message">{err}</div>}
                            </Form>
                        </Modal>
                    </div>
                </Card>
            </Container>
        </>
    )
}
export default Settings;