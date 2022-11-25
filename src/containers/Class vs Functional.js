import React, {Component} from 'react';


import './App.css';

class App extends Component {
  constructor() {
    super()
    // this.state = {
    //   robots: [],
    //   searchfield: ''
    // }
  }

  componentDidMount() {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      // .then(users => this.setState({ robots: users }));
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Hello
        </header>
      </div>
    )
  };
}


const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch('http://api.open-notify.org/iss-now.json')
      .then(response => response.json())
      .then(users => setRobots(users));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        Hello

        {robots.map((robot) => <div>{JSON.stringify(robot)}</div>)}
      </header>
    </div>
  )
}


export default App;
