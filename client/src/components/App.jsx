import React from 'React';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
  }

  getData() {
    console.log('getting');
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3003/description',
      contentType: 'application/json',
      success: (results) => {
        console.log(results);
      }
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