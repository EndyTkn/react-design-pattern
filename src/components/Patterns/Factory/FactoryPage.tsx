import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { User } from "../../../models/User";
import { DefaultUserCreator } from "./Creator";

export const FactoryPage = () => {
    const [users, setUsers] = useState<User[]>([]);
    const userCreator = new DefaultUserCreator();
    const createUser = () => {
        users.push(userCreator.createUser());
        setUsers([...users]);
    };

    const renderUsers = () => {
        return users.map((user) => {
            return <li key={user.id}>{user.toString()}</li>;
        });
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>Factory Example</h1>
                    <p>Creating Default User</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => createUser()}>Create User</Button>
                </Col>

                <h2>Users</h2>
                <Col>
                    {renderUsers()}
                </Col>
            </Row>
        </Container>
    );
};
