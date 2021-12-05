import React from "react";
import { FaCalendarCheck } from "react-icons/fa";
import {Link} from "react-router-dom";

class FinishBooking extends React.Component {

    constructor(props) {
        super();
        console.log(props.location.state)
        this.state = {
            ...props.location.state
        }

    }
    render() {

        return (
            <div>
                <div className="FinishBooking">
                    <div>
                        <FaCalendarCheck size={150} style={{ color: 'maroon' }} />
                    </div>
                    <div>
                        <p>Study Session Booked!</p>
                    </div>
                    <div className = "confirmationList">
                        <div>
                            <p>Session Details</p>
                        </div>
                        <div>
                            Room#: {this.state.room}
                        </div>
                        <div>
                            Building: Hall Building
                        </div>
                        <div>
                            Time: {this.state.time}
                        </div>
                        <div>
                            Title: {this.state.title}
                        </div>
                        <div>
                            Note: {this.state.note}
                        </div>
                    </div>

                </div>
                <div><Link to="/">
                    <button className="buttons">
                        Return
                    </button>
                </Link></div>
            </div>



        );

    }
}

export default FinishBooking