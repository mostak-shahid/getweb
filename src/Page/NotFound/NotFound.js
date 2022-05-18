import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Navigate } from 'react-router-dom'
const NotFound = () => {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);


  return (
    <section className="page-title">
        <div className="container">
            <div className="d-flex align-items-center justify-content-center pt-5 pb-5">
                <h1 className="text-white mb-0 pt-5 pb-5">404 Page</h1>
            </div>
        </div>
        {/* <Navigate to="/" /> */}
    </section>
  )
}

export default NotFound