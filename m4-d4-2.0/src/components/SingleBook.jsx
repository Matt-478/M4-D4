import React from 'react'
import Card from 'react-bootstrap/Card'
import CommentArea from './CommentArea'

class SingleBook extends React.Component {

  state = {
    selected: false
  }
  render(){
    return(
      <>
         <Card 
         onClick={() => this.setState({selected: !this.state.selected})}
         style={{border: this.state.selected ? "4px solid orange" : "none"}}
         >
         <Card.Img variant="top" src={this.props.book.img} />
         <Card.Body>
           <Card.Title style={{color: "black" }}>{this.props.book.title}</Card.Title>
         </Card.Body>
        </Card>
        {
          this.state.selected && <CommentArea />
        }
      </>
    )
  }
}

export default SingleBook