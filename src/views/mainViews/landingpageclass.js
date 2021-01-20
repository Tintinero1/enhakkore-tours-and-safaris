import React, {Component} from "react";
import LandingPage from '../examples/LandingPage.js'

export default class landingpageclass extends Component{
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            countryList: "",
            arrivalDate: "",
            departureDate: "",
            message: ""
        }
    }

    handleTextChange = (e) =>{
        let state = this.state;
        let id = e.target.id;
        let value = e.target.value
        state[id] = value
        this.setState({state: state});
        console.log(id, value)
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

    render(){
        return(
            <div>
              <LandingPage handleTextChange={this.handleTextChange}
              country={this.state.countryList}/>
            </div>
        );
    }
};