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
          href="https://medium.com/firebase-developers/the-comprehensive-guide-to-github-actions-and-firebase-hosting-818502d86c31"
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
