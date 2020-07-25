import React from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux'
function App(props) {
  console.log(props)
  return (
  
    <div className="App">
     <h1>i am app compo</h1>
  <h1>i am {props.myname}</h1>
  <button onClick={()=>{props.changename("suresh")}}> change it</button>
    </div>
  );
}
const mapStateToProps=(state)=>{
return{
  myname:state.name
}
}
const mapDispatrchToProps =(dispatch)=>{
  return{
changename:(name)=>{(dispatch({type:'CHANGE_NAME',payload:name}))}
  }
}
export default connect(mapStateToProps,mapDispatrchToProps)(App);
