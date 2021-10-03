import React, { Component } from 'react'
import axios from 'axios'


class ImageViewer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chapter: '',
            
        }
        
      }
    

    async componentDidMount() {
        console.log(this.props);
        let list = await axios.get(`https://my-json-server.typicode.com/arifmamon/database/chapter/${this.props.match.params.id}`);
        console.log(list);
        list = list.data;
        this.setState({id:list.id,chapter: list.coverpics})

    }


    render() {
        return (
            <div>
                
                {/* {this.state.chapter.map(image => ( */}
                    <img src={this.state.chapter} alt="logo"/>
                {/* ))}*/}
            </div>
        )
    }
}

export default ImageViewer;
