import { Route, Redirect } from 'react-router-dom';
import authService from "../../services/authService"


const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            authService.getJwt() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoute;