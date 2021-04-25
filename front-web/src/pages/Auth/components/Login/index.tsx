import React, { useState } from 'react';
import './styles.scss';
import AuthCard from '../Card';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonIcon from 'core/components/ButtonIcon';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormData = {
    username: string;
    password: string;
}

type LocationState = {
    from: string;
}


const Login = () => {
    const { register, handleSubmit, errors } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory()
    const location = useLocation<LocationState>()

    const { from } = location.state || { from: { pathname: "/admin" } }

    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false)
                saveSessionData(response.data)
                history.replace(from)

            })
            .catch(() => {
                setHasError(true)
            })
    }

    return (
        <AuthCard title="login">
            {
                hasError && (
                    <div className="alert alert-danger mt-5">
                        Usuario ou senha invalidos!
                    </div>
                )
            }
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <div className="margin-bottom-30">
                    <input
                        name="username"
                        ref={register({
                            required: "Campo obrigatório",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Email inválido"
                            }
                        })}
                        type="email"
                        className={`form-control input-base ${errors.username ? 'is-invalid' : ''} `}
                        placeholder="Email"
                    />
                    {errors.username && (
                        <div className="invalid-feedback d-block">
                            {errors.username.message}
                        </div>
                    )}
                </div>
                <div className="margin-bottom-30">
                    <input
                        type="password"
                        className={`form-control input-base ${errors.password ? 'is-invalid' : ''}`}
                        placeholder="Password"
                        name="password"
                        ref={register({ required: "Campo obrigatório" })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>
                <Link to="/admin/auth/recover" className="login-link-recover">
                    Esqueci a senha?
                </Link>
                <div className="login-submit">
                    <ButtonIcon text="Logar" />
                </div>
                <div className="text-center">
                    <span className="not-registed">Não tem Cadastro?</span>
                    <Link to="/admin/auth/register" className="login-link-register">
                        CADASTRAR
                    </Link>
                </div>

            </form>
        </AuthCard>
    )
}

export default Login;