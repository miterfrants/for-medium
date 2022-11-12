import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Profile.css";

function Profile() {
    const { userId } = useParams();
    const [ user, setUser ] = useState(null);

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${userId}`)
            .then((respPromise)=>{
                return respPromise.json();
            })
            .then((data)=>{
                setUser(data);
            });
    }, [userId]);

    return (
      <div className="profile">
        Profile Page
        <h2>
            {user?.name}
        </h2>
      </div>
    );
  }
  
  export default Profile;