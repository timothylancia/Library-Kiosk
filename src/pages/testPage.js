import React from 'react';
import { Alert, Button } from 'react-bootstrap'

export class testPage extends React.Component {
    state = {
        show: false
    }
    render () {
        return (
            <div>
                <h1>test</h1>

                <rect color="#990000" height="50px" width="100%"/>

                <svg width="500" height="140" style={{fill:"#000"}}>
                    <rect width="300" height="100" style={{fill:"#990000"}}/>
                </svg>
            

            <Alert show={this.show} variant="success">
                <Alert.Heading>How's it going?!</Alert.Heading>
                <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
                fermentum.
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                <Button onClick={() => this.setState({ show: false })} variant="outline-success">
                    Close me ya'll!
                </Button>
                </div>
            </Alert>

            {!this.show && <Button onClick={() => this.setState({ show: true })}>Show Alert</Button>}
            </div>
        )
    }
}

export default testPage;