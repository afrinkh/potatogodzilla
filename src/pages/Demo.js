import axios from 'axios';
import React, { Component,Text } from 'react'
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './demo.css';
class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {

      title: '',
      id: '',
      coverpics: '',
      chapter: [],
      avatar: ''
    }
  }
  
  async componentDidMount() {
    console.log(this.props);
    let list = await axios.get(`https://my-json-server.typicode.com/arifmamon/json/posts/${this.props.match.params.id}`);
    console.log(list);
    list = list.data;
    this.setState({id:list.id,title:list.title,poster: list.poster,coverpics: list.coverpics,chapter: list.chapter,avatar: list.chapter.avatar})
  }
  sayHello() {
    alert('Hello!');
  }
  render() {
    return (
      <>
      <div className=" row">
      <div className="col div1">
        <Card style={{width: '211px'}}>
        <Card.Img variant="top" src={this.state.coverpics} style={{ height: '250px',width: '210px'}}/>
        <Card.Body>
          <Card.Title>{this.state.title}</Card.Title>
          <Card.Text>
            
          </Card.Text>

        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Created on 12mins ago</small>
        </Card.Footer>
      </Card>
      </div>
      <div className="col div2">
      <h1>Shopping List for {this.state.title}</h1>
        <ul>
          {this.state.chapter.map(chap => (
            <Link style={{color: 'black', textDecoration: 'none'}}to={`/post/${this.state.id}/${chap.id}`}>
          <li key={chap.id}>{chap.name}</li>
          </Link>
          ))}
        </ul>
        </div>
        </div>
      </>
    )
  }
}
export default Demo;
import React, { Component } from 'react'
import axios from 'axios';
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            author: '',
            img: '',
            content:''
        }
    }

    async componentDidMount() {
        let blog=await axios.get(`/blogs/${this.props.match.params.id}/edit`);
        console.log(blog);
        blog = blog.data;
        this.setState({author:blog.author,img:blog.img,content:blog.content})
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = async(e) => {
        e.preventDefault();
        await axios.patch(`/blogs/${this.props.match.params.id}`,this.state);
        this.props.history.push(`/blogs/${this.props.match.params.id}`);
    }


    render() {
        return (
            <form onSubmit={this.submitHandler}>

            <label htmlFor="author">Author</label>
            <br />
            <input
                type="text"
                name="author"
                onChange={this.changeHandler}
                placeholder="Author"
                value={this.state.author}
            />
            <br/>
            <br/>
            <label htmlFor="img">Image URL</label>
            <br />
            <input
                type="text"
                name="img"
                onChange={this.changeHandler}
                placeholder="Image"
                value={this.state.img}
            />
            <br/>
            <br/>
            <label htmlFor="content">Content</label>
            <br />
            <textarea
                type="text"
                name="content" cols="30" rows="5"
                onChange={this.changeHandler}
                placeholder="Your Content Goes Here"
                value={this.state.content}
            ></textarea>
            <br/>
            <br/>
            <br/>
            <button>Submit</button>

        </form>
        )
    }
}

export default Edit;
