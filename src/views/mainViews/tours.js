import React, {Component} from "react";
import Tours from '../examples/tours.js'
import emailjs from 'emailjs-com';
import config from 'config'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class tours extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            countryList: "Afghanistan",
            arrivalDate: "",
            departureDate: "",
            message: ""
        }
    }

    notifyGood = (message) => toast.success(message);

    notifyBad = (message) => toast.error(message);

    handleTextChange = (e) =>{
        let state = this.state;
        let id = e.target.id;
        let value = e.target.value
        state[id] = value
        this.setState({state: state});
        // console.log(id, value)
    }

    handleDateArrivalChange = (e) =>{
        let state = this.state;
        let value = e._d
        state["arrivalDate"] = value
        this.setState({state: state});
    }

    handleDateDepartureChange = (e) =>{
        let state = this.state;
        let value = e._d
        state["departureDate"] = value
        this.setState({state: state});
    }

    clearState = () => {
        let state = this.state;
        state.name = "";
        state.email = "";
        state.arrivalDate = "";
        state.departureDate = "";
        state.message = "";
        state.countryList = "";
        this.setState({state})
         
    }

    sendEmail = (e) => {
        e.preventDefault();
        let templateParams = {
            from_name: this.state.name,
            from_email: this.state.email,
            to_name: "David",
            arrival_date: this.state.arrivalDate,
            departure_date: this.state.departureDate,
            message: this.state.message,
            country: this.state.countryList
        };
        emailjs.send(config.serviceID, config.templateID, templateParams, config.userID).then((response) => {
            console.log(response);
            this.clearState();
            this.notifyGood("Your email has been sent!");
        }).catch((error) => {
            this.notifyBad("Something went wrong.");
        });
    }

    render(){
        return(
            <div>
                <ToastContainer />
              <Tours handleTextChange={this.handleTextChange}
              country={this.state.countryList}
              sendEmail={this.sendEmail} 
              handleDateArrivalChange={this.handleDateArrivalChange}
              handleDateDepartureChange={this.handleDateDepartureChange}/>
            </div>
        );
    }
};