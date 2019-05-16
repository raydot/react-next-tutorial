import React, { Component } from "react"

/*import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom"*/

/*import Main from "./Main"
import Visits from "./Visits"
import Rate from "./Rate"
import Regions from "./Regions"
import Blog from "./Blog"
import Contact from "./Contact"*/
 
class Login extends Component {
  render() {
    return (
	<HashRouter>
      <div>
		<ul className="header">
			<li><Link href="/main"><a>Winery Visits</a></Link></li>
                  <li><Link href="/visits"><a>Winery Visits</a></Link></li>
                  <li><Link href="/rate"><a>Rate A Wine</a></Link></li>
                  <li><Link href="/regions"><a>Wine Regions</a></Link></li>
                  <li><Link href="/blog"><a>See our Blog</a></Link></li>
                  <li><Link href="/contact"><a>Contact</a></Link></li>
          </ul>
        <h2>Please enter some info, etc...</h2>
		<p>Name: <input type="text" class="inputText" /></p>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>
 
        <p><Link href="/main"><button type="button">Login</button></Link></p>
		    <Route exact path="/" component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/visits" component={Main}/>
            <Route path="/rate" component={Main}/>
            <Route path="/regions" component={Regions}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
      </div>
	</HashRouter>
    );
  }
}
 
export default Login;