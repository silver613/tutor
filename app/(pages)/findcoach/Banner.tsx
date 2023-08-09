import React from 'react';

interface Props {
	title: string;
	desc: string;
}

const Banner: React.FC<Props> = ({ title, desc }) => {
	return (
		<>
			<div className="mx-auto max-w-screen-xl">
				<h2 className="mx-5 my-10 text-4xl font-bold md:mx-10 md:mr-5">{title}</h2>
				<p className="m-2 w-full font-semibold md:m-10 md:w-3/5">{desc}</p>
			</div>
		</>
	);
};

export default Banner;
