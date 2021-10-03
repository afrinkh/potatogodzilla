
import React, { Component,Text } from 'react'
import axios from 'axios'

class Api extends Component {

    componentDidMount () {
        axios.get('https://infinite-crag-37037.herokuapp.com/api')
            .then(responce => {
                console.log(responce);
            });
    }

    render() {
        return (
            <div>
                <Text>J</Text>
            </div>
        );
    }
}

export default Api;
