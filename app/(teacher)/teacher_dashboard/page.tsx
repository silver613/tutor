'use client';

import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button } from '@mui/material';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import SchoolIcon from '@mui/icons-material/School';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Lessons from './components/Lessons';
import Students from './components/Students';
import Availability from './components/Availability';
import Analysis from './components/Analysis';

export default function TeacherDashboardPage() {
	const [value, setValue] = React.useState('lessons');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};
	return (
		<>
			<Box>
				<TabContext value={value}>
					<Box className="mx-auto mt-2 w-fit bg-slate-50">
						<Tabs value={value} onChange={handleChange} variant="scrollable" centered>
							<Tab
								value="lessons"
								label="My Lessons"
								icon={<CastForEducationIcon />}
								iconPosition="start"
								sx={{ minHeight: '45px', width: 180 }}
							/>
							<Tab
								value="students"
								label="My students"
								icon={<SchoolIcon />}
								iconPosition="start"
								sx={{ minHeight: '45px', width: 180 }}
							/>
							<Tab
								value="schedule"
								label="Schedule"
								icon={<CalendarMonthIcon />}
								iconPosition="start"
								sx={{ minHeight: '45px', width: 180 }}
							/>
							<Tab
								value="Analysis"
								label="Analysis"
								icon={<AnalyticsIcon />}
								iconPosition="start"
								sx={{ minHeight: '45px', width: 180 }}
							/>
						</Tabs>
					</Box>
					<TabPanel value="lessons">
						<Lessons />
					</TabPanel>
					<TabPanel value="students">Item Two</TabPanel>
					<TabPanel value="schedule">Item Three</TabPanel>
					<TabPanel value="analysis">Item Three</TabPanel>
				</TabContext>
			</Box>
		</>
	);
}

// import * as React from 'react';

// export default function LabTabs() {
//   const [value, setValue] = React.useState('1');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%', typography: 'body1' }}>
//       <TabContext value={value}>
//         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//           <TabList onChange={handleChange} aria-label="lab API tabs example">
//             <Tab label="Item One" value="1" />
//             <Tab label="Item Two" value="2" />
//             <Tab label="Item Three" value="3" />
//           </TabList>
//         </Box>
//         <TabPanel value="1">Item One</TabPanel>
//         <TabPanel value="2">Item Two</TabPanel>
//         <TabPanel value="3">Item Three</TabPanel>
//       </TabContext>
//     </Box>
//   );
// }
