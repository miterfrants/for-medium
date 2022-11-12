function ProfileItem(props) {
    const {user} = props;
    return (
        <h2>
            {user?.name}
        </h2>
    );
  }
  
  export default ProfileItem;