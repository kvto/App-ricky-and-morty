import {useForm} from "react-hook-form"
import { schema } from "../schema";
import {Col, Row, Button, Form} from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup';

const Login = () => {
const {register, handleSubmit} = useForm({
    resolver : yupResolver(schema),
    
});
const submitForm = (data) =>{
    console.log(data);

}
    return (
    <Row>
        <Col md={6}>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group>
                    <Form.Control 
                    type="email" 
                    name="email" 
                    {...register("email")}
                    placeholder="Enter email" />
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    type="password" 
                    name="password" 
                    {...register("paswword")}
                    placeholder="******" />
                </Form.Group>

                <Button type="submit">Ingresar</Button>
            </Form>
        </Col>
    </Row>
    );
}
 
export default Login;