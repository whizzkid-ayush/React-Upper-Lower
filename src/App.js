import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>

<Navbar title="ManasTextMagician"/>
<div className="container my-3">

<TextForm heading="Enter The Txt to Analyse"/>
</div>


{/*<Navbar Nothing written, then the default cndition will work*/}
    </>
  );
}

export default App;
