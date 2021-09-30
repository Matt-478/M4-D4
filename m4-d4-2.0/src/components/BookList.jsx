import React from 'react'
import {Container, Col, Row, Form} from 'react-bootstrap'
import SingleBook from './SingleBook'

class BookList extends React.Component {

  state = {
    searchQuery: ''
  }

  render() {
    return (

    <Container>
      <Row>
        <Col>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search</Form.Label>
            <Form.Control 
            type="text" 
            placeholder="Search here"
            value={this.state.searchQuery}
            onChange={e => this.setState({searchQuery: e.target.value})}
             />
          </Form.Group>
        </Form>
        </Col>
      </Row>

      <Row>
        {
          this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(b => (
            <Col xs={3}>
              <SingleBook book={b}/>
            </Col>
            )
          )
        }
      </Row>
    </Container>
    )
  }
}

export default BookList