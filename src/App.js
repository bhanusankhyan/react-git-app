import React, { Component, PropTypes, createContext } from 'react';
import './App.css';
import FrontPage from './components/frontPage';
import { fromEvent } from 'rxjs/observable/fromEvent'
import * as Rx from 'rxjs/Rx';
import { Observable, scan, subscribe, map } from "rxjs";



/* const Test = React.createContext();


 class AppProvider extends Component {

render() {
    return (<Test.Provider value={this.state}>
    {this.props.children}
    </Test.Provider>)
  }
}*/
//const ThemeContext = createContext();
//class ThemeProvider extends Component{
  //stateless = {}
  // render(){
   // return(<div> 
    //  <ThemeContext.Provider value={this.content} >
    //{this.props.children}
    //</ThemeContext.Provider>
    //</div>
 // ) //}
//}
var initialState = {}    


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username:"",
      display:"form"      
  }

  this.onUserSubmit = this.onUserSubmit.bind(this);
  
  }

 
 onUserSubmit(username){
    this.setState({display :"Github-repo","username":username})
    alert("in Button")
    fetch("https://api.github.com/users/"+username+"/repos")
        .then ((response) => response.json())
        .then((responseJson) =>{
             alert(responseJson[0].owner['login'])
             for(var i=0;i<responseJson.length;i++){
              alert(responseJson[i]['name'])
               alert(responseJson[i]['html_url'])
               initialState[i] = {
                 "name":responseJson[i]['name'],
                  "url": responseJson[i]['html_url']
               } 
             }
        
        })

 } 
 /*onUserSubmit(username): Observable<result[]> {
  return fetch("https://api.github.com/users/"+username+"/repos")
    .map(response => {
      const todos = response.json();
      return todos.map((todo) => new result(todo));
    })
    .catch(this.handleError);
   
}*/

/*onUserSubmit(username){
  alert('button submit')
  var result = Rx.Observable.fromPromise(fetch('https://api.github.com/users/'+username+'/repos'));

  alert(Object.keys(result))
  //result.map(res => res.json)
  //alert(result[0].owner['login'])
  result.map((response) => response.json())
  result.map(JSON.parse)
  //result.concatAll() // each1 object is emitted separately
  //result.map(p => p) // trans1form to ProjectModel
  //alert(result[0].owner['login'])
 //result.filter(p => True) //filter whatever you want
  result.subscribe(v => alert(Object.keys(v)));
  result.subscribe(x => alert(x), e => console.error(e));
result.map(res => res.json())
  
  alert("done")

}

*/

  render()

  {  if (this.state.display === 'form'){
    return(<div>
    <FrontPage onSubmit={this.onUserSubmit} />
     </div>
    )
  }
  if(this.state.display === 'Github-repo'){
    return(<div>
      <h1>Hello</h1>
    </div>
    );
  }
  }
}

export default App;
