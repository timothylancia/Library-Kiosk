import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

export class home extends React.Component {
    render() {
        return (
            <div>
                <div class="split left">
                    <div class="centered">
                        <h1>Printer Troubles?</h1>
                        <Link to="/WEPASupport">WEPASupport</Link>
                    </div>
                </div>

                <div class="split right">
                    <div class="centered">
                        <h1>Computer Troubles?</h1>
                        <Link to="/APUSupport">APUSupport</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default home;