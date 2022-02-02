import { Component} from 'react'
import './index.css';
import axios from 'axios'
class Form extends Component {
  state = { username: '' }


  
  handleChange(event) {
    this.setState({ username: event.target.value});
    console.log(this.state.username);
  }

  handleSubmit =  (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${this.state.username}`)
    .then((response) => { 
      console.log(response.data); 
      console.log(this.props);
      this.props.onsubmit(response.data);
      this.setState({username: ''})
    })
  
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
    	  <input 
          value = {this.state.username}
          type="text" onChange={ (event) => { this.handleChange(event) } } 
          placeholder="GitHub username"/>
        <button>Add card</button>
    	</form>
      </div>
    )
  }
}

export default Form;