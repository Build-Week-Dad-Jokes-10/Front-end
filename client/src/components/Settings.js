import React, { useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/AxiosWithAuth';
import { UserContext }  from '../contexts/UserContext';
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input, Container, Label, Card, Button } from 'reactstrap';
import MainHeader from './MainHeader';

const Settings = props => {
    const { user, setUser } = useContext(UserContext);
    const [newData, setNewData] = useState({username: '', password: ''})
    const buttonStyle = {
        marginTop: '3%',
        backgroundColor: "#EBC700",
        color: "#380a15",
        fontWeight: "bold"
    }

    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal)
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
                        style={buttonStyle} onClick={toggle}
                        >Change your Username</Button>
                        <Modal isOpen={modal} toggle={toggle} className="change-user">
                            <ModalHeader toggle={toggle}>Change Username</ModalHeader>
                            <Form onSubmit={'handleSubmit'}>
                            <FormGroup>
                                <Label>Change your Username</Label>
                                <Input
                                    type='text'
                                    name="setup"
                                    placeholder="Username"
                                    value={newData.username}
                                />
                                </FormGroup>
                                <Button>Submit</Button>
                            </Form>
                        </Modal>
                        <Button style={buttonStyle}>Change your Password</Button>
                    </div>
                </Card>
            </Container>
        </>
    )
}
export default Settings;