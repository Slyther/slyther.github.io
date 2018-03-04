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
            showError: false,
            showCalendars: false,
            calendarsJSX: '',
            error: '',
        }
        this.internals = {
            countryCodes: ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AN', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW']
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.renderCalendars = this.renderCalendars.bind(this);
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

    onSubmit(){
        const { startDate, daysCount, countryCode } = this.state;
        if(!this.internals.countryCodes.includes(countryCode)){
            this.setState({showCalendars: false, showError: true, error: 'Please select a valid country code!'});
            return;
        }else if(this.state.daysCount === 0) {
            this.setState({showCalendars: false, showError: true, error: 'Zero number of days!'});
            return;
        }else if(this.state.showError === true) {
            this.setState({showError: false});
        }
        this.renderCalendars(moment(startDate), daysCount, countryCode);
    }

    renderCalendars(startDate, daysCount, countryCode){
        this.setState({showCalendars: true});
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
                {
                    this.state.showError &&
                    <div className="error col-xs-12">
                        <div className="container">
                            {this.state.error}
                        </div>
                    </div>
                }
                {
                    this.state.showCalendars &&
                    <div className="col-xs-12 row">
                        <div className="calendar-container row center-xs">
                            <Calendar
                                className="col-xs-2 calendar"
                                showNavigation={true}
                                showNeighboringMonth={false}
                                calendarType="US"
                                activeStartDate={this.state.startDate.toDate()}
                                minDate={this.state.startDate.toDate()}
                                maxDate={moment(this.state.startDate).add(parseInt(this.state.daysCount-1), 'days').toDate()}
                            />
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default App;
