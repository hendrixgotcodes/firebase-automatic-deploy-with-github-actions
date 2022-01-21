import Lottie from 'react-lottie';
import './App.css';
import * as rocket_launch from './rocket-launch.json'

const options = {
  animationData: rocket_launch.default,
  autoplay: true,
  loop: true,
  rendererSettings: {
  preserveAspectRatio: 'xMidYMid slice'
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Lottie 
          height={200}
          isPaused={false}
          isStopped={false}
          options={options}
          width={200}
        />

        <p>
          <code>Firebase automatic deploy using github actions</code>
        </p>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how
        </a>
      </header>
    </div>
  );
}

export default App;
