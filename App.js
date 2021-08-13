import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Menu from './Menu';
import Ban from './Ban';
import Card from './Card';
import Footer from './Footer';

function App() {
  return (
  <>
  <div className="container-fluid bg-dark">
  <Menu></Menu>
  <Ban></Ban>
  <br/>
  <hr/>
  <br/>
  <Card/>
  <br/>
  <Card/>
  <br/>
  <Card/>
  <br/>
  <hr/>
  <br/>
<Footer></Footer>
</div>
  </>
  );
}

export default App;
