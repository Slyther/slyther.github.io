import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            startDate: moment(),
            daysCount: 0,
            countryCode: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(event) {
        if(event.target.name === 'daysCount' && event.target.value < 0){
            event.target.value = 0;
        }
        this.setState({ [event.target.name]: event.target.value });
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    onSubmit() {
        console.log("Testing!");
    }

    render() {
        return (
            <div className="doc row">
                <div className="col-xs-12 row container">
                    <div className="col-xs-12 row start-xs">
                        <label className="col-xs-6" htmlFor="startDate">Start Date:</label>
                        <div className="col-xs-5 col-xs-offset-1">
                            <DatePicker
                                name="startDate"
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                            />
                        </div>
                    </div>
                    <div className="col-xs-12 row start-xs">
                        <label className="col-xs-6" htmlFor="daysCount">Number of Days:</label>
                        <input
                        className="col-xs-5 col-xs-offset-1"
                            name="daysCount"
                            type="number"
                            min={0}
                            value={this.state.daysCount}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-12 row start-xs">
                        <label className="col-xs-6" htmlFor="countryCode">Country Code:</label>
                        <input
                            className="col-xs-5 col-xs-offset-1"
                            name="countryCode"
                            type="text"
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="col-xs-12 row center-xs">
                        <input
                            text="Submit"
                            type="submit"
                            onClick={this.onSubmit}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
