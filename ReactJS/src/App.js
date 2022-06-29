import React, { Component } from 'react';
import "./App.css"
import axios from 'axios'

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      show: false,
      data: [],
      rating: 1
    }
  }
  
   componentDidMount =  () => {
    // Write your code here

    this.handleGetData().then((allratings)=>{
      
      this.setState({...this.state, data : allratings.data}) 
     });
  }
    
  handleGetData = async () => {
    // Write your code here
    const allratings= await fetch('http://localhost:8001/courses/get')
    console.log(allratings)
    return allratings;
      
    }

  handleApply = async (id) => {
    // Write your code here
  };

  handleRating = (e) => {
    // Write your code here
  }

  handleAddRating = async (id) => {
    // Write your code here
  }

  handleDrop = async (id) => {
    // Write your code here
  }
 
  
  render() {
  
    return (
      <div className="home">
        <header>
            <h2>ABC Learning</h2>
        </header>
        
           
        
        <div className="cardContainer">
        {this.state.data.map(element => (
            <div className="card">
              <ul>
                <div className="header">
                  <li>{element.courseName}</li>
                  <li>{element.courseDept}</li>
                  <li>{element.description}</li>                        
                  <li>
                  <li>Rate: 
                    <select className="rating" name="rating">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                    <button className="rate">Add</button>
                  </li>
                  <button className="drop">Drop Course</button>
                  </li>
                  <li>
                    <button className="btn">Apply</button>
                    </li>
                </div>
                <div className="footer">
                  <li> {`${element.duration} , ${element.noOfRatings} , ${element.rating}/5 `}</li>
                </div>
              </ul>
            </div>
             ))}
        </div>
          
       
      </div>
    );
        
  }
}

export default Home;