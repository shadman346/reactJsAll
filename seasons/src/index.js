import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
   constructor(props) {
      super(props);
      this.state = { lat: null, errorMsg: '' };

      window.navigator.geolocation.getCurrentPosition(
         (position) => {
            this.setState({ lat: position.coords.latitude });
         },
         (err) => {
            this.setState({ errorMsg: err.message });
         }
      );
   }

   render() {
      if (this.state.errorMsg && !this.state.lat)
         return <div>Error: {this.state.errorMsg}</div>;
      else if (!this.state.errorMsg && this.state.lat)
         return <div>latitude: {this.state.lat}</div>;
      else return <div>Loading!!</div>;
   }
}
ReactDOM.render(<App />, document.getElementById('root'));
