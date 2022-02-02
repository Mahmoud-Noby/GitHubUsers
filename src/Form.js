import { Component} from 'react'
import './index.css'
class Form extends Component {
  render() {
    return (
      <div className="form">
        <form action="">
    	  <input type="text" placeholder="GitHub username"/>
        <button>Add card</button>
    	</form>
      </div>
    )
  }
}

export default Form;