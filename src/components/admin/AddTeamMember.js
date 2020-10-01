import React, { useState } from "react";
import {connect} from 'react-redux';
import Ids from "../common/Ids";
import images from "../../assets/imageUrls";
import FormIput from "../common/FormInput";
import SubmitButton from "../common/SubmitButton";
import {addMemberAction} from '../../actions/index';

const AddTeamMember = (props) => {
  const [state, setState] = useState({ name: "", role: "", department: '', linkedin:'', github:'', twitter: '', blog: '', email: ''});

      const handleChange = ({target: {name, value}}) => {
          setState( prevState => ({...prevState, [name]: value}));
      }
      console.log('state.twitter', state.twitter);



  const handleSubmit = (e) => {
    e.preventDefault();
    const { addMemberAction } = props;
    const userInput = {
        name: state.name,
        role: state.role,
        department: state.department,
        email: state.email,
        linkedin: state.linkedin,
        github: state.github,
        blog: state.blog,
    }
    addMemberAction(userInput);
    setState({name: '', department: '', role:'', twitter: '', blog: '', github: '', email: '', linkedin: ''})
  }

  return (
    <div className="admin">
      <img className="bg-image" src={images.open_box} alt="openbox" />

      <div className="form-container">
        <h1>Add a team member</h1>
        <form onSubmit={handleSubmit} >
          <div>
            <FormIput
              name="name"
              value={state.name}
              type="text"
              placeholder="name"
              onChange={handleChange}
              required={true}
            />
             <FormIput
              name="role"
              value={state.role}
              type="text"
              placeholder="role"
              onChange={handleChange}
              required={true}
            />
             <FormIput
              name="department"
              value={state.department}
              type="text"
              placeholder="department"
              onChange={handleChange}
              required={true}
            />
            <FormIput
              name="email"
              value={state.email}
              type="email"
              placeholder="email"
              onChange={handleChange}
              required={false}
            />
             <FormIput
              name="github"
              value={state.github}
              type="text"
              placeholder="github"
              onChange={handleChange}
              required={false}
            />
             <FormIput
              name="blog"
              value={state.blog}
              type="text"
              placeholder="blog"
              onChange={handleChange}
              required={false}
            />
             <FormIput
              name="linkedin"
              value={state.linkedin}
              type="text"
              placeholder="linkedin"
              onChange={handleChange}
              required={false}
            />
             <FormIput
              name="twitter"
              value={state.twitter}
              type="text"
              placeholder="twitter"
              onChange={handleChange}
              required={false}
            />
             <input type="file" style={{marginBottom: '20px', width: '100%'}}/>
            <SubmitButton />
          </div>
        </form>
      </div>
      <Ids />
    </div>
  );
};


const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, {addMemberAction} )(AddTeamMember);
