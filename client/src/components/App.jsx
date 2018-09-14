import React from 'React';
import axios from 'axios';
import Menu from './Menu/Menu.jsx';
import Hours from './Hours/Hours.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      restaurantData: {
        menu: {},
        hours: {},
      },
      date: undefined,
    }
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
    axios.get('/description')
      .then((res) => {
        console.log(res.data);
        this.setState({restaurantData: res.data, date: new Date()});
      });
  }

  componentDidMount() {
    this.getData();
  }
  

  render() {
    return (
      <div>
        Yelp
        <br></br>
        <br></br>
        <button onClick={this.showMenu}>Show Menu</button>
        <br></br>
        <Menu 
          show={this.state.showMenu} 
          hideMenu={this.hideMenu} 
          menuInfo={this.state.restaurantData.menu}
          name={this.state.restaurantData.restaurant_name}
        />
        <br></br>
        <Hours hours={this.state.restaurantData.hours}/>
      </div>
    )
  }
}

export default App;