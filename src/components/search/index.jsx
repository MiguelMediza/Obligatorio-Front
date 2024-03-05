import {Container, Col, Row} from "react-bootstrap";
import Form from "react-bootstrap/Form"; 
const Search = ({value, onChange}) => {

    return(
        <Container className="text-center d-flex mb-4">
           <Row className='mx-auto'>
                <Col lg={12}>
                <Form>
                    <Form.Control
                    
                        type='search'
                        placeholder='Buscar'
                        className='me-2'
                        aria-label='Buscar'
                        value={value}
                        onChange={onChange}
                    />
                </Form>
                </Col>
           </Row>
        </Container>
    )
};
export default Search;