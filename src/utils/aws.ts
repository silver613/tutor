import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import Cookies from 'js-cookie';
// Configure AWS Cognito
AWS.config.update({
	region: 'eu-central-1',
	accessKeyId: 'AKIA3WFV2SULDNNESNDC',
	secretAccessKey: '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',
});

export const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();

export function updateCurUserCookie() {
	Auth.currentAuthenticatedUser().then((user) => {
		Cookies.set('curUser', JSON.stringify(user.attributes), { expires: 7 });
	});
}
