import React from 'React';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
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
        <button onClick={ this.getData }>GetData</button>
      </div>
    )
  }
}

export default App;