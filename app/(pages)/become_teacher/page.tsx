'use client';

import React, { useState, useEffect } from 'react';
import { Button, Divider, Paper, TextField, Typography } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import VideoUploader from '~/components/common/VideoUploader';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { Auth } from 'aws-amplify';
import { updateCurUserCookie } from '~/utils/aws';

const BecomeTeacherPage = () => {
	const [meAsTeacher, setMeAsTeacher] = useState<string>('');
	const [validMAT, setValidMAT] = useState<boolean>(true);
	const [lessonStyle, setLessonStyle] = useState<string>('');
	const [validLS, setValidLS] = useState<boolean>(true);
	const [videoName, setVideoName] = useState<string>('');
	const [validVideo, setValidVideo] = useState<boolean>(true);
	const [uploading, setUploading] = useState<boolean>(false);
	const [saving, setSaving] = useState<boolean>(false);
	const [curUser, setCurUser] = useState<any>();

	const router = useRouter();

	useEffect(() => {
		Auth.currentAuthenticatedUser()
			.then((user) => {
				console.log(user);
				setCurUser(user);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	function getVideoName(data: string) {
		setVideoName(data);
		setValidVideo(true);
	}

	function validateData() {
		if (!videoName) setValidVideo(false);
		if (meAsTeacher.length < 50) setValidMAT(false);
		if (lessonStyle.length < 50) setValidLS(false);

		return !!videoName && validMAT && validLS;
	}

	function submitData() {
		if (validateData()) {
			setSaving(true);
			const attributes = {
				'custom:is_teacher': '1', // set is_teacher to TRUE
				'custom:intro_video': videoName,
				'custom:MAT': meAsTeacher,
				'custom:LS': lessonStyle,
			};
			Auth.updateUserAttributes(curUser, attributes)
				.then((res) => {
					setSaving(false);
					updateCurUserCookie();
					router.push('/teacher_dashboard');
					console.log(res);
				})
				.then((err) => {
					console.error(err);
				});
		}
	}

	return (
		<>
			<Paper className="mx-auto max-w-4xl px-4 py-4">
				<div className="mx-auto max-w-3xl">
					<Typography className="mt-12 block text-center text-2xl font-bold text-slate-700">
						Become a Teacher
					</Typography>
					<section>
						<Typography className="mb-2 mt-4 text-center text-lg text-slate-500">1. Video Instruction</Typography>
						<Divider />
						<ul className="mt-6 list-disc pl-8 text-sm text-slate-500">
							<li>
								By submitting your video to coach.com, you acknowledge that you agree to italki&apos;s Terms of Service.
								Please be sure not to violate others&apos; copyright or privacy rights.
							</li>
							<li>
								File size may not exceed <strong>500 MB</strong> and its type must be <strong> .MP4</strong> or{' '}
								<strong>.webm</strong>
							</li>
							<li>For the best result, the video aspect ratio should be 16:9.</li>
							<li>It shows me fluently speaking.</li>
							<li>It is filmed horizontally.</li>
							<li>Its time length is approximately 1 to 4 minutes.</li>
							<li>It has good lighting and clear sound.</li>
							<li>It does NOT include personal contact information or external advertisements.</li>
						</ul>
						<VideoUploader uploading={uploading} setUploading={setUploading} sendVideoName={getVideoName} />
						<p hidden={validVideo} className="text-center text-sm text-red-600">
							Please upload your introduction video. This requirement is mandatory for all teachers.
						</p>
					</section>
					<section>
						<Typography className="mb-2 mt-16 text-center text-lg text-slate-500">2. Introduction</Typography>
						<Divider />
						<p className="mb-2 mt-4 text-sm text-slate-700">Me as a Teacher</p>
						<TextField
							multiline
							fullWidth
							inputProps={{ maxLength: 700 }}
							rows={4}
							error={!validMAT}
							helperText={validMAT ? `${meAsTeacher.length} / 700` : 'Greater than 50 characters'}
							FormHelperTextProps={{
								sx: {
									display: 'block',
									marginLeft: 'auto',
								},
							}}
							value={meAsTeacher}
							onChange={(e) => {
								setMeAsTeacher(e.target.value);
								setValidMAT(true);
							}}
						/>
						<p className="mb-2 mt-4 text-sm text-slate-700">My lesson & teaching Style</p>
						<TextField
							multiline
							fullWidth
							inputProps={{ maxLength: 700 }}
							rows={4}
							error={!validLS}
							helperText={validLS ? `${lessonStyle.length} / 700` : 'Greater than 50 characters'}
							FormHelperTextProps={{
								sx: {
									display: 'block',
									marginLeft: 'auto',
								},
							}}
							value={lessonStyle}
							onChange={(e) => {
								setLessonStyle(e.target.value);
								setValidLS(true);
							}}
						/>
					</section>
					<div className="mt-6 flex justify-end">
						<Button disabled={uploading || saving} variant="outlined" className="mr-2">
							Cancel
						</Button>
						<LoadingButton
							disabled={uploading}
							className="bg-primary-600"
							onClick={submitData}
							loading={saving}
							loadingPosition="start"
							startIcon={<SendIcon />}
							variant="contained"
						>
							<span>Submit</span>
						</LoadingButton>
					</div>
				</div>
			</Paper>
		</>
	);
};

export default BecomeTeacherPage;
