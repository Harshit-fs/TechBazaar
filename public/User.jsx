import {useeffect, useState} from "react";
import axios from "axios";

const [user, setUser] = useState(null);
const [loadiing, setLoading] = useState(true);
const [error, setError] = useState(null);

const fetchUser = async () => {
    try {
        const res = await axios.get("http://localhost:5000/api/user");
        setUser(res.data);
        
    } catch (err) {
        setError("Failed to fetch user data");
    
 
}finally {
    setLoading(false);
}

 useeffect(() => {
    fetchUser();
}, []);
if (loading) {
    return <div>Loading...</div>;
}
if (error) {
    return (error);
}
return (
    <div>
        <h2>User Information</h2>
      User.map((user) => (
            <div key={user.id}>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
            </div>
        ))    
        </div>
    );
}



