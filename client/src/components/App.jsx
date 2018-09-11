import React from 'React';
import axios from 'axios';
import Menu from './Menu.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    }
    this.getData = this.getData.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu() {
    this.setState({showMenu: true});
  }

  hideMenu() {
    this.setState({showMenu: false});
  }

  getData() {
    console.log('getting');
    axios.get('/description')
      .then((res) => {
        console.log('got ur datas bro');
        console.log(res.data);
      });
  }

  render() {
    return (
      <div>
        Hello World!
        <br></br>
        <button onClick={ this.getData }>Get Data</button>
        <br></br>
        <button onClick={ this.showMenu }>Show Menu</button>
        <br></br>
        <Menu show={this.state.showMenu} hideMenu={this.hideMenu}/>
      </div>
    )
  }
}

export default App;