import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { UserContext }  from '../contexts/UserContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Container, Label, Card, Button } from 'reactstrap';
import MainHeader from './MainHeader';

const Settings = props => {
    const { user, setUser } = useContext(UserContext);
    const [newData, setNewData] = useState({username: '', password: '', confirm: ''});
    const [err, setError] = useState('');
    const buttonStyle = {
        marginTop: '3%',
        backgroundColor: "#EBC700",
        color: "#380a15",
        fontWeight: "bold"
    }

    const [userModal, setUserModal] = useState(false);
    const userToggle = () => setUserModal(!userModal)
    const [passModal, setPassModal] = useState(false);
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
            //
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
                            <Form onSubmit={'handleSubmit'}>
                            <FormGroup>
                                <Input
                                    type='text'
                                    name="username"
                                    placeholder="Username"
                                    value={newData.username}
                                    onChange={handleChange}
                                />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Modal>
                        <Button style={buttonStyle} onClick={passToggle}>Change your Password</Button>
                        <Modal isOpen={passModal} toggle={passToggle} className="change-user">
                            <ModalHeader toggle={passToggle}>Change Password</ModalHeader>
                            <Form onSubmit={handleSubmit}>
                            <FormGroup>
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
                                <Button>Submit</Button>
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