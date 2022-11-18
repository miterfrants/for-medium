import { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Profile.css";
import ProfileItem from '../Components/ProfileItem';
import { dataContext } from '../Repositories/DataContext';

function Profile() {
    const { userId } = useParams();
    const [ user, setUser ] = useState(null);

    useEffect(()=>{
        dataContext.getUserRepositoryInstance().find(userId)
            .then((data)=>{
                setUser(data);
            });
    }, [userId]);

    return (
      <div className="profile">
        Profile Page
        <ProfileItem user={user}></ProfileItem>
      </div>
    );
  }
  
  export default Profile;