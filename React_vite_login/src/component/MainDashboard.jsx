import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from "./Dashboard.jsx";

function MainDashboard() {
  const navigate = useNavigate();
  //const [isLoaded, setIsLoaded] = useState(true);
  //const [user, setuser] = useState([]);
  // useEffect(() => {
  const token = localStorage.getItem('token');
 
  const [data, setData] = useState([]);

  const arr = ['one', 'two', 'three'];
 
  useEffect(() => {
    
    UseEff();
    

  }, [])

  const UseEff = () => {
    var myHeaders = new Headers();

      //myHeaders.append("Authorization", "Bearer " + token);

       myHeaders.append("Authorization", "Bearer 97|XHZkW6qDZWVCbYWpF5RZqJku6N9mYpmMcfpAxxv8");

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:8000/api/Profile", requestOptions)
        .then(response => response.json())
        .then(
          (result) => {
            console.log(result);
            //console.log(result.name);
            setData(result);
            //setData('dddd');
            console.log(data);
            console.log('test')
          }
        )
        .catch(error => console.log('error', error));
  }




  return (
    <div>
      
  </div>
  );
}

export default MainDashboard


