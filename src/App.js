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
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
                <div className="doc row">
                    <div className="col-xs-12 row container">
                        Testing!
                    </div>
                </div>
            );
    }
}

export default App;
