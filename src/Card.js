
import { Component } from 'react';
import "./index.css"
export class Card extends Component {
  url = 'https://via.placeholder.com/75'

  render() {
    const profile = this.props
    return (
      <div className="github-profile" >
      <img src={profile.avatar_url} alt="" />
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
    )
  }
}



export default Card;