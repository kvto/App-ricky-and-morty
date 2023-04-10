import {useForm} from "react-hook-form"
import { schema } from "../schema";
import {Col, Row, Button, Form} from "react-bootstrap";
import { yupResolver } from '@hookform/resolvers/yup';
import { usePost } from "../../../../CustomHooks/useHTTP";
const Login = () => {
const {register, handleSubmit, formState: { errors }} = useForm({
    resolver : yupResolver(schema),
});

const [post, dataResponse, fetching] = usePost();

const submitForm = (data) =>{
    console.log(data);
    post("users", data);

}
    return (
    <Row>
        <Col md={6}>
            <Form onSubmit={handleSubmit(submitForm)}>
                <Form.Group>
                    <Form.Control 
                    name="email" 
                    {...register("email")}
                    placeholder="Enter email" />
                    {errors.email && (
                        <span className="text-danger">Correo no valido</span>
                    )}
                </Form.Group>
                <Form.Group>
                    <Form.Control 
                    type="password" 
                    name="password" 
                    {...register("paswword")}
                    placeholder="******" />
                    {errors.password && (
                        <span className="text-danger">Contraseña no valido</span>
                    )}
                </Form.Group>

                <Button type="submit">Ingresar</Button>
            </Form>
        </Col>
    </Row>
    );
}
 
export default Login;