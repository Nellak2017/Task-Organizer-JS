import {
    ProfileContainer,
    ProfilePicture,
    ProfileName
} from './ProfileIcon.elements.js';

//TODO: Add Data Validation for the username when adding the route
const ProfileIcon = ({ data }) => {
    return (
        <>
            {data.map((value, key) => {
                return (
                    <ProfileContainer to={"/Users/" + value.username}>
                        <ProfilePicture alt={value.username+" Picture"} src={value.picture} />
                        <ProfileName>{value.username}</ProfileName>
                    </ProfileContainer>
                );
            }
            )
            }
        </>
    );
}

export default ProfileIcon;