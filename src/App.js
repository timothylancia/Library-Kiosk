import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './pages/main';
import APUSupport from './pages/APUSupport';
import WEPASupport from './pages/WEPASupport';

// Links to respective chat widget

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content" >
        <Layout >
            <Header title="Library Help Kiosk" scroll>
                <Navigation>
                    <Link to="/APUSupport">APU Support Chat</Link>
                    <Link to="/WEPASupport">WEPA Support Chat</Link>
                    <Link to="/">Home</Link>
                </Navigation>
            </Header>
            <Content>
                <div className="page-content" />
                <Main/>
            </Content>
        </Layout>
    </div>
      // <div className="App">
      //   <h1>Need Assistance?</h1>
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     {/* <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       APU Support Chat
      //     </a> */}
      //   </header>
      //   <Link to='../pages/APUSupport'>APU Support Chat</Link>
      // </div>
    );
  }
}

export default App;
