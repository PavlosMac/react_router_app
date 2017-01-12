import React from 'react'
import About from './About.jsx'
import Home from './Home.jsx'
import Pricing from './Pricing.jsx'
import {Link} from 'react-router'

class Main extends React.Component {


render(){
  return(
    <div className="content">
      <h4>C7 Website</h4>
      <ul className="header">
        <li><Link to='/Home' activeClassName="active">Home</Link></li>
        <li><Link to='/About' activeClassName="active">About</Link></li>
        <li><Link to='/Pricing' activeClassName="active">Pricing</Link></li>
      </ul>
      <div className="content">
        {this.props.children}
      </div>

    </div>
  )
}



}

export default Main;
