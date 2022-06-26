import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return (
    <div>This is profile page for user id {userId}</div>
  )
}

export default Profile;
