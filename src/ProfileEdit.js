import React, { useState } from "react";

function ProfileEdit() {
    const [user, setUser] = useState({});
  
    //The following effect sets the document title after every render.
    //useEffect(() => {
        //document.title = `The time is now ${Date.now()}`;
    //});

    //The following effect sets the document title to a value that doesn't use any state variables or props. This effect will run exactly once.
    //useEffect(() => {
        //document.title = `Welcome to Thinkful!`;
    //}, []); // Pass [] to only apply the effect once

    //The following effect sets the document title to a custom message including the number of clicks. This effect will rerun only when the value of count changes. This is one way to increase performance and avoid unnecessary calls.
    //const [count, setCount] = useState(0);
    //useEffect(() => {
        //document.title = `You clicked ${count} times`;
    //}, [count]); // Only rerun the effect if `count` changes
    
    
    //When this component first renders, user is an empty object, so user.id is falsy and the component displays Loading.... Eventually, the fetch() call returns and calls setUser() with the user that's returned by the API. The call to setUser() causes the component to re-render—and this time, user.id is truthy, so the user information is displayed.
    
    //can also use promises syntax for useEffect:
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
          .then((response) => response.json())
          .then(setUser);
      }, []);
    //useEffect(() => {
        //async function loadUsers() {
        //const response = await fetch(
          //"https://jsonplaceholder.typicode.com/users/1"
        //);
        //const userFromAPI = await response.json();
        //setUser(userFromAPI);
      //}
      //loadUsers();}, []); // Passing [] so that it only runs the effect once
  
    if (user.id) {
      // `user.id` is truthy after the API call returns
      return (
        <form name="profileEdit">
          <div>
            <label htmlFor="username">User Name:</label>
            <input
              id="username"
              name="username"
              type="text"
              value={user.username}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" value={user.email} />
          </div>
        </form>
      );
    }
    return "Loading...";
  }

  export default ProfileEdit;