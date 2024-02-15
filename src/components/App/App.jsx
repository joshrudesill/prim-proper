import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import GuestForm from "../GuestForm/GuestForm";
import GuestList from "../GuestList/GuestList";
import DinnerSupplies from "../DinnerSupplies/DinnerSupplies";
import Footer from "../Footer/Footer";

function App() {
  let [guestList, setGuestList] = useState([]);

  //On load, get guests
  useEffect(() => {
    getGuests();
  }, []);

  const getGuests = () => {
    axios
      .get("/api/guests")
      .then((response) => {
        setGuestList(response.data);
      })
      .catch((err) => {
        alert("error getting guests");
        console.log(err);
      });
  };

  //   <div className="App">
  //   <Header />
  //   <h2>Party Leader</h2>
  //   {guestList[0] && <h3>{guestList[0].name}</h3>}
  //   <GuestForm
  //     getGuests={getGuests}
  //   />
  //   <GuestList guestList={guestList} />
  //   <DinnerSupplies guestList={guestList} />
  //   <Footer />
  // </div>
  return (
    <div className='App'>
      <Header />
      <h2>Party Leader</h2>
      {guestList[0] && <h3>{guestList[0].name}</h3>}
      <h2>Add a new guest</h2>
      <GuestForm getGuests={getGuests} />
      <GuestList guestList={guestList} />

      <DinnerSupplies guestList={guestList} />
      <Footer />
    </div>
  );
}

export default App;
