import React from "react";

const AuthenticatedRoute = ({ path , element }) => {
    const { isAuthenticated } = useContext(Auth);

    return isAuthenticated? (
        <Route path={path} element={element} /> 
    ) : (
        <Redirect to="/login" />
    )
} 

export default AuthenticatedRoute