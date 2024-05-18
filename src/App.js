
import './App.css';
import{React,useState,useEffect} from 'react'; 
import Axios from "axios";
function App() {
  const [listOfUsers,setListOfUsers]=useState([]);
  const[name,setName]=useState([]);
  const[age,setAge]=useState([]);
  const[username,setUserName]=useState([]);

  useEffect(()=>{
    Axios.get("http://localhost:5000/getUsers").then((response)=>{
      setListOfUsers(response.data);
    })
  },[])

  const createUser=()=>{
    Axios.post("http://localhost:5000/createUser",{
      name,
      age,
      username,

    }).then((response)=>{
      alert("User Created");
    });

  };


  const deleteUser=()=>{

    Axios.delete(`http://localhost:3000/deleteUser/${name}`,{
      name
      ,age,
      username}).then((response)=>{
      alert(name+"deleted");
    }).then((response)=>{
      const filteredUsers=listOfUsers.filter((user)=>{
        return user.name!==name
      })
      setListOfUsers(filteredUsers)

      
    })

  }


  return (
    <div className="App">
      <div className="usersDisplay">
       {listOfUsers.map((user)=>{
        return(
          <div>
            <h1>Name:{user.name}</h1>
            <h1>Age:{user.age}</h1>
            <h1>Username:{user.username}</h1>
          </div>
        )
       }
       )}
      </div>
      <input 
      type="text" 
      placeholder="Name..."
      onChange={(event)=>{
        setName(event.target.value);
      }


      }
     
      />
      <input 
      type="number"
       placeholder="Age..."
       onChange={(event)=>{
        setAge(event.target.value);
      }


      }

       />
      <input type="text"
       placeholder="Username..."
       onChange={(event)=>{
        setUserName(event.target.value);
      }


      }
       />
      <button onClick={createUser}>Create User</button>
      <button onClick={deleteUser}>Delete User</button>

    </div>
  );
  

 
}

export default App;
