import React from 'react';
import { render } from 'react-dom';
import Tabs, { Tab } from 'material-ui-next/Tabs';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tabState: 'foo'
    }
  }

  setTabState(value) {
    this.setState({ tabState: value })
  };

  render() {
    return(
      <Router>
        <div style={styles}>
          <Tabs value={this.state.tabState}>
            <Tab to={'/foo'} component={Link} onClick={() => this.setTabState('foo')} value='foo' label='foo' />
            <Tab component={props => <Link to={'/bar'} {...props} />} onClick={() => this.setTabState('bar')} value='bar' label='bar'>
              Bar
          </Tab>
          </Tabs>
          <Switch key='main'>
            <Route
              exact
              path={'/foo'}
              component={() => <h1>Test Foo</h1>}
            />
            <Route
              exact
              path={'/bar'}
              component={() => <h1>Test Bar</h1>}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));