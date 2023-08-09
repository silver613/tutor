// Function to format a number in thousands (K) or millions (M) format depending on its value
import awsconfig from '~/aws-exports';

export const toUiAmount = (amount: number) => {
	if (!amount) return 0;

	let value;

	if (amount >= 1000000000) {
		const formattedNumber = (amount / 1000000000).toFixed(1);
		if (Number(formattedNumber) === parseInt(formattedNumber)) {
			value = parseInt(formattedNumber) + 'B';
		} else {
			value = formattedNumber + 'B';
		}
	} else if (amount >= 1000000) {
		const formattedNumber = (amount / 1000000).toFixed(1);
		if (Number(formattedNumber) === parseInt(formattedNumber)) {
			value = parseInt(formattedNumber) + 'M';
		} else {
			value = formattedNumber + 'M';
		}
	} else if (amount >= 1000) {
		const formattedNumber = (amount / 1000).toFixed(1);
		if (Number(formattedNumber) === parseInt(formattedNumber)) {
			value = parseInt(formattedNumber) + 'K';
		} else {
			value = formattedNumber + 'K';
		}
	} else {
		value = amount.toFixed(0);
	}

	return value;
};

export function getLocalTimezone() {
	const date = new Date();

	// Get the timezone offset in minutes
	const timezoneOffsetInMinutes = date.getTimezoneOffset();

	// Convert the offset to hours and calculate the sign (+ or -)
	const timezoneOffsetHours = Math.abs(timezoneOffsetInMinutes / 60);
	const timezoneSign = timezoneOffsetInMinutes < 0 ? '+' : '-';

	// Format the timezone string as "GMT±hh:mm"
	const timezoneString = `GMT${timezoneSign}${String(timezoneOffsetHours).padStart(2, '0')}:${String(
		Math.abs(timezoneOffsetInMinutes) % 60,
	).padStart(2, '0')}`;

	return timezoneString;
}

export function getFileExtension(fileName: string) {
	const parts = fileName.split('.');
	if (parts.length > 1) {
		return parts.pop(); // Get the last element after splitting
	} else {
		return ''; // No file extension found
	}
}

export function getFullS3Uri(objectKey: string) {
	const { aws_project_region, aws_user_files_s3_bucket } = awsconfig;
	return `https://${aws_user_files_s3_bucket}.s3.${aws_project_region}.amazonaws.com/public/${objectKey}`;
}

export function validatePhoneNumber(phoneNumber: string | undefined) {
	if (phoneNumber) {
		const cleanedPhoneNumber = phoneNumber.replace(/[^\d+]/g, '');
		const isValid = /^\+\d{1,}\d*$/.test(cleanedPhoneNumber);
		return isValid;
	}
}
