import "./App.css"
import React, {useState, useEffect} from "react";
//import ReactDOM from "react-dom";    


function App() {
    const [userData, setUserData] = useState([]);
    const getApiData = async () => {
        const response = await fetch(
            "https://dummyjson.com/users"
        ).then((response) => response.json());
        setUserData(response.users);
        
        
    };
    
    useEffect(() => {
        getApiData();
        
        
    }, []);

    
    console.log(userData);
    

    
  return (
      <div className = "wrapper">
          <div className = "content">
                <div className = "dataTable">
                  <table>
                      <thead className = "head">
                          <tr>
                              <th className="h1"> id </th>
                              <th className="h2"> firstName </th>
                              <th className="h3"> lastName </th>
                              <th className="h4"> maidenName </th>
                              <th className="h5"> age </th>
                              <th className="h6"> gender </th>
                              <th className="h7"> phone </th>
                              <th className="h8"> email </th>

                          </tr>
                      </thead>
                      
                      <tbody Name = "body">
                          {userData.map((user)  => (
                          <tr className = "tablerow">
                             <td className = "id"> {user.id}</td>
                             <td className = "firstName">{user.firstName}</td>
                             <td className = "lastName">{user.lastName}</td>
                             <td className = "maidenName">{user.maidenName}</td>
                             <td className = "age">{user.age}</td>
                             <td className = "gender">{user.gender}</td>
                             <td className = "email">{user.email}</td>
                             <td className = "phone">{user.phone}</td>
                          </tr>
                          ))}  
                          

                      </tbody>
                  </table>

              </div>
              <div>
                  <form>
                  <input placeholder = "Search"/>
                  </form>

              </div>
          </div>

      </div>


  );
}
export default App;


