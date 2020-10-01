import React, { useState, useEffect} from "react";
import {connect} from 'react-redux';
import Ids from "../common/Ids";
import images from "../../assets/imageUrls";
import FormIput from "../common/FormInput";
import SubmitButton from "../common/SubmitButton";
import {login} from '../../actions/index';
import { Redirect } from "@reach/router";

const AdminPage = (props) => {
  const [state, setState] = useState({ username: "", password: "" });

      const handleChange = ({target: {name, value}}) => {
          setState( prevState => ({...prevState, [name]: value}));
      }

  const handleSubmit = (e) => {
    e.preventDefault();
    const { login } = props;
    const userInput = {
      username: state.username,
      password: state.password,
    }
    login(userInput);
    setState({username: '', password: ''});
  }


  return (
    <div className="admin">
      <img className="bg-image" src={images.open_box} alt="openbox" />

      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <FormIput
              name="username"
              value={state.username}
              type="text"
              placeholder="username"
              onChange={handleChange}
              required={true}
            />
            <FormIput
              name="password"
              value={state.password}
              type="password"
              placeholder="password"
              onChange={handleChange}
              required={true}
            />
            <SubmitButton />
          </div>
        </form>
      </div>
      <Ids />
    </div>
  );
};


const mapStateToProps = (state) => {
  console.log('state -----', state.login.status);
 
  return {status: state.login.status};
}

export default connect(mapStateToProps, {login})(AdminPage);
