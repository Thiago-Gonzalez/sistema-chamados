import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/auth';

export default function RouteWrapper({
    component: Component,
    isPrivate, //verifica se a rota é privada
    ...rest //spread operator para repassar o restante (default)
}){

    const { signed, loading } = useContext(AuthContext);

    if (loading) {
        return(
            <div>

            </div>
        );
    }

    /*se o usuário nao estiver logado
    e tentando acessar a página dashboard, será redirecionado
    para a página de login */
    if (!signed && isPrivate) {
        return <Redirect to="/" />
    }

    /*se o usuário estiver logado
    e tentando acessar a página de login, será redirecionado
    para a página de dashboard */
    if (signed && !isPrivate) {
        return <Redirect to="/dashboard" />
    }

    return(
        <Route 
            {...rest}
            render={ props => (
                // renderiza o componente com suas props
                <Component {...props} />
            ) }
        />
    );
}