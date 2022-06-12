import './App.css';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';


function App() {
  return (
    <>
      <Header />
      <div className='cards'>
        <Cards img="https://images.pexels.com/photos/163042/pokemon-pokemon-go-mobile-trends-smartphone-163042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="React Pokemon App using PokeAPI" text="Most of us have been huge fans of Pokemon since childhood. You can make a very simple and fun React project using PokeAPI." />
        <Cards img="https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="React Cryptocurrency Application" text="Cryptocurrency is always popular among young stars. What if we make a React Project where the users can get daily price updates of the crypto coins."/>
        <Cards img="https://images.pexels.com/photos/4021565/pexels-photo-4021565.jpeg?cs=srgb&dl=pexels-infinity-shutter-4021565.jpg&fm=jpg" name="React Password Generator" text="Whenever we need to create a password for any website or any kind of Mobile application, it becomes hectic for us to think about a strong password at that moment."/>
        <Cards img="https://images.pexels.com/photos/4340919/pexels-photo-4340919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Photo Gallery Application" text="We can build an intermediate-level React project by creating a photo gallery Application. In this application, users can view, search, and store their images."/>
        <Cards img="https://images.pexels.com/photos/5426409/pexels-photo-5426409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="React Chat Application" text="You can create your chat applications like WhatsApp clone using React and Socket.io. This is a very good intermediate-level React project."/>
        <Cards img="https://images.pexels.com/photos/5082567/pexels-photo-5082567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="React Movie and Series Application" text="This is a very good example of an intermediate-level React Project. Here you can show all the trending Movies and Series."/>
        <Cards img="https://images.pexels.com/photos/276923/pexels-photo-276923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Instagram Clone"text="Nowadays everyone is crazy about social media! So you can create your own social media application too. You can create an Instagram clone using MERN(MongoDB, Express, React, and Node) stack. " />

      </div>
    </>
  );
}

export default App;
