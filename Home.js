
import './App.css';
import React from 'react';
import AgeComponent from "./AgeComponent"
import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils';
import axios from "axios"

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Winston",
      age: 25,
      students: ['Renald', "fazaz "],
      newstudent: "",
      editstudentindex: - 1,
      editstudent: "",
      fruitId: 0,
      fruitName: ""

    };
  }

  componentDidMount() {
    axios.get("/api/fruit/all").then(res => {
      this.setState({
        students: res.data.map(fruit => fruit.name)
      })
    })

  }

  incrementAge = () => {
    this.setState({ age: this.state.age + 1 })
  }

  decrementAge = () => {
    this.setState({ age: this.state.age - 1 })
  }


  componentDidUpdate() {
    console.log("This component is updated");
  }

  addstudent = () => {
    this.setState({ students: this.state.students.concat(this.state.name) })
  }

  deletestud = (name, index) => {
    this.setState({ students: this.state.students.filter((item, i) => i !== index) })
  }

  updatestud = () => {
    this.setState({ students: this.state.students })
  }

  handleSearch = () => {
    axios.get(`/api/fruit/${this.state.fruitId}`).then(res => {
      this.setState({
        fruitName: res.data.name
      })
    })
  }

  render() {

    console.log("this.state.fruitId", this.state.fruitId)
    return (
      <div className="App">
        <h1>Hello, My name is {this.state.name}</h1>

        <AgeComponent
          age={this.state.age}
          incrementAge={this.incrementAge}
          decrementAge={this.decrementAge}
        />


        {
          this.state.students.map((student, index) => {
            if (index === this.state.editstudentindex) {
              return (
                <div>
                  <input value={this.state.editstudent} onChange={event => this.setState({ editstudent: event.target.value })}></input>
                  <button onClick={() => this.updatestud(student, index)}>Save</button>
                  <button onClick>Cancel</button>
                </div>
              )

            } else {
              return (
                <div>
                  <p>{student}</p>
                  <button onClick={() => this.deletestud(student, index)}>Delete</button>
                  <button onClick={() => this.setState({ editstudentindex: index, editstudent: student })}>Edit</button>
                </div>
              )
            }

          })
        }

        <input value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })} />
        <button onClick={this.addstudent}>Add</button>
        <div>
          <input value={this.state.fruitId} onChange={event =>
            this.setState({ fruitId: event.target.value })}></input>
          <button onClick={this.handleSearch}>Search</button>
          <h1>{this.state.fruitName}</h1>
        </div>

      </div>
    )
  }
}
export default Home;