import React from 'react';
import CoachCard from '~/components/common/CoachCard';

const Coaches = () => (
	<section className="scroll-mt-16" id="coach">
		<div className="mx-auto max-w-screen-xl px-4 pt-14 pb-6 lg:px-8 lg:py-20 lg:pb-6">
			<div className="mb-0 grid items-start gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
				<CoachCard />
			</div>
		</div>
	</section>
);

export default Coaches;
