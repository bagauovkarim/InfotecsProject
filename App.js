import "./App.css" 
import React, {useState, useEffect} from "react"; 
   


function App() {
    const [userData, setUserData] = useState([]);  
    const getApiData = async () => {
        const response = await fetch(
            "https://dummyjson.com/users"
        ).then((response) => response.json());
        setUserData(response.users); //массив с данными кладем в хук


    };

    useEffect(() => {
        getApiData(); //возвращаем массив userData


    }, []);

    console.log(userData); //выводим массив в консоль для проверки

    const [value, setValue] = useState('') //создаем новый State для фильтрации

    const filteredUsers = userData.filter(user => { //фильтруем данные из userData и возвращаем их в filteredUsers

        return user.firstName.toLowerCase().includes(value.toLowerCase()) 
                || user.lastName.toLowerCase().includes(value.toLowerCase())
                || user.maidenName.toLowerCase().includes(value.toLowerCase())
                || user.gender.toLowerCase().includes(value.toLowerCase())
                || user.email.toLowerCase().includes(value.toLowerCase())
                || user.address.address.toLowerCase().includes(value.toLowerCase())
                || user.address.city.toLowerCase().includes(value.toLowerCase())
                || user.age.toString().toLowerCase().includes(value.toLowerCase())
                || user.phone.toString().toLowerCase().includes(value.toLowerCase())
                || user.id.toString().toLowerCase().includes(value.toLowerCase())
        
        
    })


    return (
        //создание таблицы
        <div className="wrapper">
            <div className="content">
                <div className="dataTable">
                    <div className="form">
                        <form>
                            <input //создание input-компонента для поиска информации
                                className="input"
                                placeholder="Search"
                                onChange={(event) => setValue(event.target.value)}
                            />



                        </form>

                    </div>
                    <table>
                        <thead className="head" /* создание шапки таблицы */> 
                            <tr>
                                <th className="h1"> id </th>
                                <th className="h2"> firstName </th>
                                <th className="h3"> lastName </th>
                                <th className="h4"> maidenName </th>
                                <th className="h5"> age </th>
                                <th className="h6"> gender </th>
                                <th className="h7"> phone </th>
                                <th className="h8"> email </th>
                                <th className="h9"> street </th>
                                <th className="h10"> city </th>
                            </tr>
                        </thead>

                        <tbody Name="body" /* вывод таблицы */>
                            {filteredUsers.map((user) => (
                                <tr className="tablerow">
                                    <td className="id"> {user.id}</td>
                                    <td className="firstName">{user.firstName}</td>
                                    <td className="lastName">{user.lastName}</td>
                                    <td className="maidenName">{user.maidenName}</td>
                                    <td className="age">{user.age}</td>
                                    <td className="gender">{user.gender}</td>
                                    <td className="email">{user.phone}</td>
                                    <td className="phone">{user.email}</td>
                                    <td className="street">{user.address.address}</td>
                                    <td className="city">{user.address.city}</td>
                                </tr>
                            ))}


                        </tbody>
                    </table>

                </div>
                
            </div>

        </div>


    );
    
    






}

export default App;


