import React from 'react';
import { Card,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Component } from 'react';
import {Link} from 'react-router-dom';


class CardView extends Component {


    render() {
    return (
      <>
        <Card style={{ width: '11.6rem', margin: '10px 50px 20px 0' ,padding:'1.5px'}}>
        <Card.Img variant="top" src={this.props.img} style={{ height: '250px',width: '180px'}}/>
        <Card.Body>
          <Card.Title>{this.props.name}</Card.Title>
          <Card.Text style={{}}>
            {this.props.desc}
          </Card.Text>
          <Link to={`/post/${this.props.id}`}>
            <Button variant="primary">Read</Button>
          </Link>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Updated {this.props.createdAt}mins ago</small>
        </Card.Footer>
      </Card>
      </>
    )
}
}
export default CardView;
