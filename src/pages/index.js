import React, { Component } from 'react';

import CardView from './cardview';
import './home.css';
import Paginations from "react-js-pagination";
import Pagination from 'react-bootstrap/Pagination';
import PageItem from 'react-bootstrap/PageItem';
import axios from 'axios';


class Home extends Component {
   constructor(props) {
     super(props);
     this.state = {
      isLoaded: false,
      posts: [],
      currentPage: 1,
      todosPerPage: 8,
      activePage: 15
      
     };
    this.handleClick = this.handleClick.bind(this);

   }

   handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
  }

handleClick(event) {
  this.setState({
    currentPage: Number(event.target.id)
  });
}

//     // componentDidMount() {
//     //   axios.get('/post')
//     //     .then(responce => {
//     //       this.setState({isLoaded: true,posts: responce.data});
//     //       console.log(responce);
//     //     });
//     // }

     async componentDidMount() {
      const fetched = await axios.get('https://my-json-server.typicode.com/arifmamon/json/posts')
	  .catch(function (error) {
		// handle error
		console.log(error);
	  });
	  
      console.log(fetched);
	  
       this.setState({isLoaded: true,posts: fetched.data  });
     }

    render() { 
      
      const { isLoaded,posts, currentPage, todosPerPage} = this.state;
      const indexOfLastTodo = currentPage * todosPerPage;
      const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
      const currentTodos = posts.slice(indexOfFirstTodo, indexOfLastTodo);
 
      const rendeRposts = currentTodos.map(data => {
         return <CardView name={data.title} img={data.coverpics} desc={data.plot} key={data._id} createdAt={data.lastupdated} id={data.id}/>
      }) 
      const pageNumbers = [];
      for (let i = 1; i <= Math.ceil(posts.length / todosPerPage); i++) {
         pageNumbers.push(i);
      }
      const renderPageNumbers = pageNumbers.map(number => {
        return (
          <Pagination.Item
            key={number}
            id={number}
            onClick={this.handleClick}
            active={number === currentPage}
            pagerangedisplayed={1}

          >
            {number}
          </Pagination.Item>
        );
      });
       if(isLoaded) {
       	return(
			<div className="container">
			<div className="row">

				{rendeRposts}

			<Pagination size="sm" id="page-numbers">
				<Pagination.Item onClick={this.handleClick.bind(null, currentPage - 1)}>
					Prev
				</Pagination.Item>

					{renderPageNumbers}

				<Pagination.Item onClick={this.handleClick.bind(null, currentPage + 1)}>
					Next
				</Pagination.Item>
			</Pagination >

			<Paginations
			activePage={this.state.activePage}
			itemsCountPerPage={10}
			totalItemsCount={450}
			pagerangedisplayed={5}
			onChange={this.handlePageChange.bind(this)}
			/>
           	</div>
         	</div>
       	);
      } else {
         return <div>Loading...</div>;
       	}
    }
}

export default Home;