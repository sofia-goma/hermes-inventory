import Input from "../components/Input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const goToHome = (path) => {
        if (!path) return;
        navigate(path);
    }
    const onSubmit = async (data) => {
        try {  
            const resp = await axios.post('http://localhost:8000/auth/login', {
                email: data.userEmail,
                password: data.userPassword
            });
            const result = await resp.data;
            localStorage.setItem('accessToken', result);
            sessionStorage.setItem('accessToken', result);
            console.log(result);
            console.log(data);
            alert('form submitted');
        } catch (err) {
            console.warn(err.message);
        }
    }
    return (
        <section class="bg-gray-50">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <Input
                                register={register}
                                inputType="email"
                                label="Votre Adresse Email"
                                tagRef="userEmail"
                                placeholder="jacques@gmail.com"
                            />
                            <Input
                                register={register}
                                inputType="password"
                                label="Votre Mot de passe"
                                tagRef="userPassword"
                                placeholder="******"
                            />

                            <Button
                                type="submit"
                                title='Connecter'
                                className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 px-5 py-3.5 text-center"
                                classNameT="text-white text-[14px]"
                            />


                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                N'avez-vous pas un compte? <Link to="/register" class="font-medium text-primary-600 hover:underline dark:text-primary-500">S'enregistrer</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}