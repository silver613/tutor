'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TextField } from '@mui/material';
import { Auth } from 'aws-amplify';
import Spinner from '~/components/common/Spinner';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setUser } from '~/slices/userSlice';
import Cookies from 'js-cookie';

export default function SignInPage() {
	const [email, setEmail] = React.useState<string>('');
	const [emailValid, setEmailValid] = React.useState<boolean>(true);
	const [password, setPassword] = React.useState<string>('');
	const [pwdValid, setPwdValid] = React.useState<boolean>(true);
	// Spinner state
	const [spin, setSpin] = React.useState<boolean>(false);
	const router = useRouter();
	const dispatch = useDispatch();
	// React.useEffect(() => {
	// 	getCurUser()
	// 		.then((res) => {
	// 			setSpin(true);
	// 			router.push('/dashboard');
	// 		})
	// 		.catch((err) => console.error('getCurUserError', err));
	// }, []);

	async function getCurUser() {
		try {
			const user = await Auth.currentAuthenticatedUser();
			return user;
		} catch (error) {
			throw error;
		}
	}

	function isValidEmail(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailRegex.test(email)) {
			setEmailValid(true);
			return true;
		} else {
			setEmailValid(false);
			return false;
		}
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSpin(true);
		if (emailValid && Boolean(password)) {
			Auth.signIn(email, password)
				.then((result) => {
					dispatch(setUser(result.attributes));
					router.push('/dashboard');
					// Cookies.set('curUser', JSON.stringify(user.attributes), { expires: 7 });
				})
				.catch((error) => {
					console.error(error);
				});
		}
	};

	return (
		<>
			{spin && <Spinner title="Signing... One moment please" />}
			<div className="mx-auto my-10 max-w-lg rounded-xl bg-white p-8 shadow shadow-slate-300">
				<h1 className="text-4xl font-medium">Login</h1>
				<p className="text-slate-500">Hi, Welcome back 👋</p>
				<div className="my-5">
					<button className="my-3 flex w-full items-center justify-center space-x-2 rounded-lg border border-slate-200 py-3 text-center text-slate-700 transition duration-150 hover:border-slate-400 hover:text-slate-900 hover:shadow">
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src="https://www.svgrepo.com/show/355037/google.svg" className="h-6 w-6" alt="Google login icon" />
						<span>Login with Google</span>
					</button>
				</div>
				<form action="" className="my-10" onSubmit={handleSubmit}>
					<div className="flex flex-col space-y-5">
						<div>
							<p className="mb-1 text-slate-700">Email address</p>
							<TextField
								className="w-full"
								id="email_address"
								value={email}
								required
								error={!emailValid}
								helperText={emailValid ? undefined : 'Please insert valid email address'}
								placeholder="Enter your email address"
								size="small"
								onBlur={(e) => isValidEmail(e.target.value)}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div>
							<p className="mb-1 text-slate-700">Password</p>
							<TextField
								className="w-full"
								type="password"
								id="password"
								value={password}
								required
								error={!pwdValid}
								helperText={pwdValid ? undefined : 'Please insert correct password'}
								placeholder="Enter your password"
								size="small"
								onBlur={(e) => setPwdValid(true)}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="flex flex-row justify-between">
							<div className="flex items-center">
								<input type="checkbox" className="h-4 w-4 border-slate-200 focus:bg-primary-600" />
								<label className="ml-2">Remember me</label>
							</div>
							<div>
								<a href="/resetpassword" className="font-medium text-primary-600">
									Forgot Password?
								</a>
							</div>
						</div>
						<button className="inline-flex w-full items-center justify-center space-x-2 rounded-lg border-primary-500 bg-primary-600 py-3 font-medium text-white hover:bg-primary-500 hover:shadow">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth="2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
								/>
							</svg>
							<span>Login</span>
						</button>
						<p className="text-center">
							Not registered yet? &nbsp;&nbsp; &nbsp;{' '}
							<a href="/signup" className="inline-flex items-center space-x-1 font-medium text-primary-600">
								<span>Register now </span>
								<span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-4 w-4"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
										/>
									</svg>
								</span>
							</a>
						</p>
					</div>
				</form>
			</div>
		</>
	);
}
