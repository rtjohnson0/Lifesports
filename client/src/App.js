import React, {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import AddUser from "./components/Forms/AddUser";
import Login from "./components/Forms/login";
import Profile from './components/profile'
import Home from './components/home'
import Profiles from './components/profiles'

function App() {
  const [display, setDisplay] = useState('auth');

  return (
    <Router>
      <Navbar display={display} setDisplay={setDisplay}/>
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/user/:username" component={Profiles} />
      
      <Route path="/create" component={CreateExercise} />
      {/* <Route path="/sign-up" component={CreateUser} /> */}
      <Route path="/login" component={CreateUser} />
      <Route path="/profile" component={Profile} />
      <Route path="/exercises" exact component={ExercisesList} />
    </Router>
  );
}

export default App;
