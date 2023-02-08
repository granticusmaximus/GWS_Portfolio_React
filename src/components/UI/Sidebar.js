import React, { useEffect } from "react"
import { Dna } from 'react-loader-spinner'
import Button from 'react-bootstrap/Button'
import { signOut } from "firebase/auth"
import { auth } from "../../services/fb_commands"
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import '../../assets/css/Sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  useEffect(() => {
      if (loading) {
        <Dna
          visible={true}
          height="90"
          width="90"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
        return;
      }
      if (!user) navigate("/");
    }, [user, loading]);

  const logout = () => {
      signOut(auth);
  };

  return (
    <div className="aside">
        <p>Quick Links</p>
        <hr/>
        <Button 
          variant="danger" 
          onClick={logout}
        >
          Logout
        </Button>
      <hr/>
    </div>
  );
};

export default Sidebar;