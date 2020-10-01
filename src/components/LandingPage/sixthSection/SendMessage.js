import React, { Component } from "react";
import { connect } from "react-redux";
import SubmitButton from "../../common/SubmitButton";
import FormIput from "../../common/FormInput";
import { sendMessageAction } from "../../../actions/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class SendMessage extends Component {

  state = { email: "", subject: "", message: "", clicked: false };


  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  notify = () => {
    const {
      message: { status, data },
    } = this.props;
    if (status === 200) toast(data.message);
    
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    const { sendMessageAction } = this.props;

    const userInput = {
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    sendMessageAction(userInput);

    this.setState({
      email: "",
      subject: "",
      message: "",
    });
  };


  handleClick = () => {
  
    this.setState({clicked: true})
  }


  render() {

    return (
      <div className="message-us" id="message-us">
        <div>
        {this.notify()}
        </div>
        <ToastContainer 
          position="bottom-left"
        />
        <h1>Message us</h1>
        <form onSubmit={this.onFormSubmit}>
          <FormIput
            type="email"
            placeholder="Your email"
            value={this.state.email}
            name="email"
            onChange={this.onInputChange}
            required={true}
          />
          <FormIput
            type="text"
            placeholder="Subject"
            value={this.state.subject}
            name="subject"
            onChange={this.onInputChange}
            required={true}
          />
          <FormIput
            type="textarea"
            placeholder="Message.."
            value={this.state.message}
            name="message"
            onChange={this.onInputChange}
            required={true}
          />
          <SubmitButton />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state", state.message.status);
  return { message: state.message };
};

export default connect(mapStateToProps, { sendMessageAction })(SendMessage);
