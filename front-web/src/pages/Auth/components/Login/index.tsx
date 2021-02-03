import React from 'react';
import './styles.scss';
import AuthCard from '../Card';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import ButtonIcon from 'core/components/ButtonIcon';

type FormData = {
    email: string;
    password: string;
}


const Login = () => {
    const { register, handleSubmit } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        //chamar api de autenticacion
    }

    return (
        <AuthCard title="login">
            <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <input
                    name="email" 
                    ref={register}
                    type="email"
                    className="form-control input-base margin-bottom-30"
                    placeholder="Email"
                    />
                <input
                    type="password"
                    className="form-control input-base"
                    placeholder="Password"
                    name="password" 
                    ref={register}
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