import type { NextPage } from 'next';
import Layout from './components/layout';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import useMutation from '../lib/client/useMutation';

interface LoginForm {
    id: string;
    password: string;
}

const Login:NextPage = () => {
    const [enter, {loading, data, error}] = useMutation("/api/users/log-in");
    const { register, reset, handleSubmit } = useForm<LoginForm>();
    const onValid = (data:LoginForm) => {
         
    }
    return (
        <Layout title="트위터에 로그인하기">
            <div className='flex flex-col space-y-6 my-6 relative'>
                <button className='w-3/4 border border-gray-300 rounded-3xl p-2 mx-auto'>Google 계정으로 로그인</button>
                <button className='w-3/4 border border-gray-300 rounded-3xl p-2 flex mx-auto items-center justify-center'>
                    <svg 
                    className="w-6 h-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 256 315">
                        <path d="M213.803 167.03c.442 47.58 41.74 63.413 42.197 63.615c-.35 1.116-6.599 22.563-21.757 44.716c-13.104 19.153-26.705 38.235-48.13 38.63c-21.05.388-27.82-12.483-51.888-12.483c-24.061 0-31.582 12.088-51.51 12.871c-20.68.783-36.428-20.71-49.64-39.793c-27-39.033-47.633-110.3-19.928-158.406c13.763-23.89 38.36-39.017 65.056-39.405c20.307-.387 39.475 13.662 51.889 13.662c12.406 0 35.699-16.895 60.186-14.414c10.25.427 39.026 4.14 57.503 31.186c-1.49.923-34.335 20.044-33.978 59.822M174.24 50.199c10.98-13.29 18.369-31.79 16.353-50.199c-15.826.636-34.962 10.546-46.314 23.828c-10.173 11.763-19.082 30.589-16.678 48.633c17.64 1.365 35.66-8.964 46.64-22.262"/>
                    </svg>
                    Apple로 로그인하기
                </button>
                <hr />
            </div>
            <form onSubmit={handleSubmit(onValid)}
            className='flex flex-col'>
                <input 
                {...register("id", {
                    required:true,
                })}
                placeholder="휴대폰 번호, 이메일 주소 또는 사용자 이름" type="text" className='border border-gray-300 max-w-full w-3/4 p-2 mt-5 rounded-md mx-auto'/>
                <input 
                {...register("password", {
                    required:true,
                })}
                placeholder="비밀번호" type="password" className='border border-gray-300 max-w-full w-3/4 p-2 mt-5 rounded-md mx-auto'/>
                <button className='bg-black text-white rounded-3xl font-bold py-2 px-10 block max-w-full text-center w-3/4 mx-auto mt-5'>비밀번호를 잊으셨나요?</button>
            </form>
            <span className='text-sm absolute left-1/4 mt-2'>
                계정이 없으신가요?
                <Link href="/create-account">
                <button className='text-[#3BA9EE] font-medium'> 가입하기</button>
                </Link>
            </span>
        </Layout>
    );

}

export default Login;