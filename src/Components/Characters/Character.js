import moment from "moment";
import {Col, Card, Button} from "react-bootstrap";
const Character = ({image, id, name, gender, status, species, created}) => {
    return (  
        <Col md={4} className="mt-3 mb-3 text-center">
            <Card>
                <Card.Img variant={"top"} src={image} />
                <Card.Body>
                     <Card.Title>
                        {name} - {gender}
                        </Card.Title>
                        <Card.Text>
                            {status === "Alive" ? "VIVO" : "MUERTO"} - {species}
                        </Card.Text>
                        <Card.Text>
                        <small>{moment(created).format("DD/MM/yyyy")}</small>
                        </Card.Text>
                        <Button type="button" variant="primary" size="lg">
                            Ver más
                        </Button>
                </Card.Body>
            </Card>
        </Col>
    );
}
 
export default Character;