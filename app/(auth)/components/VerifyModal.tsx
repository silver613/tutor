import React from 'react';
import { Modal, Paper, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import LoadingButton from '@mui/lab/LoadingButton';
import { Auth } from 'aws-amplify';
import Spinner from '~/components/common/Spinner';
import { useRouter } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function VerifyModal({ email, isModalOpen }: { email: string; isModalOpen: boolean }) {
	const [isSending, setIsSending] = React.useState<boolean>(false); // state to set loading button
	const [code, setCode] = React.useState<string>('');
	const [spin, setSpin] = React.useState<boolean>(false); // spinner state

	const router = useRouter();

	async function sendCode() {
		try {
			const res = await Auth.confirmSignUp(email, code);
			return res;
		} catch (error) {
			throw error;
		}
	}

	async function resendCode({ username }: { username: string }) {
		try {
			await Auth.resendSignUp(username);
			return true;
		} catch (err) {
			throw err;
		}
	}

	function resend() {
		resendCode({ username: email })
			.then((res) => {
				toast.success('Code resent successfully!', {
					position: toast.POSITION.TOP_CENTER,
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	function confirmCode() {
		setSpin(true);
		sendCode()
			.then((res) => {
				setSpin(true);
				router.push('/signin');
			})
			.catch((err) => {
				setSpin(false);
				if (err.name === 'CodeMismatchException')
					toast.error(err.message, {
						position: toast.POSITION.TOP_CENTER,
					});
			});
	}

	return (
		<>
			<ToastContainer />
			{spin && <Spinner title="Registered successfully! redirecting..." />}
			<Modal
				open={isModalOpen}
				// onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<div className="flex h-screen w-full items-center justify-center">
					<Paper className="m-4 px-6 py-10">
						<h1 className="mb-6 text-center text-3xl font-bold text-primary-800">COACH</h1>
						<h2 className="mb-4 text-2xl">Hi! Welcome to our Website!</h2>
						<p className="mb-2">Please insert your verification code to activate your account.</p>
						<TextField
							autoFocus
							placeholder="Verify code"
							size="small"
							onChange={(e) => setCode(e.target.value)}
							className="w-full"
						/>
						<LoadingButton
							className="mt-4 w-full bg-primary-600 text-white hover:bg-primary-700"
							onClick={confirmCode}
							endIcon={<SendIcon />}
							loading={isSending}
							loadingPosition="end"
							variant="contained"
						>
							<span>Send Code</span>
						</LoadingButton>
						<p className="mt-4 text-sm">
							Not received yet? Click{' '}
							<span className="cursor-pointer text-primary-700 underline hover:font-bold" onClick={resend}>
								here
							</span>{' '}
							to resend the verification code.
						</p>
					</Paper>
					F
				</div>
			</Modal>
		</>
	);
}
