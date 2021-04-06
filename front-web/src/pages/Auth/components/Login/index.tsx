import React, { useState } from 'react';
import './styles.scss';
import AuthCard from '../Card';
import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonIcon from 'core/components/ButtonIcon';
import { makeLogin } from 'core/utils/request';
import { saveSessionData } from 'core/utils/auth';

type FormData = {
    username: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();
    const [hasError, setHasError] = useState(false);
    const history = useHistory()


    const onSubmit = (data: FormData) => {
        makeLogin(data)
            .then(response => {
                setHasError(false)
                saveSessionData(response.data)
                history.push('/admin')
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
                <input
                    name="username"
                    ref={register({ required: true })}
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                />
                <input
                    type="password"
                    className="form-control input-base"
                    placeholder="Password"
                    name="password"
                    ref={register({ required: true })}
                />
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