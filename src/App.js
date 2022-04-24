import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { ChangeToAbhishek,ChangeToKiran,ChangeToAyushi,ChangeToAvinash} from './redux/action creator/ActionCreator';
import AnotherComponent from './AnotherComponent';

function App(props) {



  return (
    <div className="App">
      <header className="App-header">
        {props.state.reducer1.name}

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button type="button" onClick={ props.changeName1}>Change abhisehk</button>
        <button type="button" onClick={ props.changeName2}>Change kiran</button>
        <button type="button" onClick={ props.changeName3}>Change ayushi</button>
        <button type="button" onClick={ props.changeName4}>Change avinash</button>
       

        <AnotherComponent/>
      </header>
    </div>
  );
}
let mapStateToProps =(store)=>{
  return {
    state:store
  }
}
let mpDispatchToProps = (dispatch)=>{
  return {
    changeName1:()=>{ dispatch(ChangeToAbhishek()) },
    changeName2:()=>{ dispatch(ChangeToKiran()) },
    changeName3:()=>{ dispatch(ChangeToAyushi()) },
    changeName4:()=>{ dispatch(ChangeToAvinash()) },

  }
}
export default connect( mapStateToProps,mpDispatchToProps)(App);
