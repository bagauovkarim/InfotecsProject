import './App.css'
import React from 'react';



function App() {
    
  return (
      <div className = "wrapper">
          <div className = "content">
                <div className = "dataTable">
                  <table>
                      <th>N</th>
                      <th>Fullname</th>
                      <th>Age</th>
                      <th>Gender</th>
                      <th>Telephone</th>
                      <th>Address</th>
                      <tbody>


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
