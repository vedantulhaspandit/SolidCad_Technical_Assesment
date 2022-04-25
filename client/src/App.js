import { Route } from "react-router-dom";

import ContactForm from "./components/ContactForm";

function App() {
  const addContactDetailsHandler = async (contactDetailsObj) => {
    try {
      const response = await fetch(
        "http://localhost:8082/api/contacts/save_contact",
        {
          method: "POST",
          body: JSON.stringify(contactDetailsObj),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error during saving contact ", error);
    }
  };

  return (
    <Route path="/">
      <div className="app">
        <ContactForm onAddContactDetails={addContactDetailsHandler} />
      </div>
    </Route>
  );
}

export default App;
