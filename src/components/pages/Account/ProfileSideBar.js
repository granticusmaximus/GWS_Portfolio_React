import { useAuthValue } from '../../../firebase/AuthContext'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/firebase'

function ProfileSideBar() {
    const { currentUser } = useAuthValue()
    const btnStyle = {
        position: 'absolute', 
        bottom: 0
    };

    return (
        <div className='center'>
            <div className='profile'>

                <h4>Profile</h4>
                <hr />
                <p>
                    <strong>Email: </strong>{currentUser?.email}
                </p>
                <span
                    className='btn btn-outline-danger'
                    onClick={() => signOut(auth)}
                    style={btnStyle}
                >
                    Sign Out
                </span>
            </div>
        </div>
    )
}

export default ProfileSideBar