
import base64 from 'js-base64';

export async function initializeSession({
    username,
    password,
    }: {
    username: string;
    password: string;
}) {
  
    const myHeaders = new Headers();
    const token = base64.encode(username + ":" + password)
    myHeaders.append("Authorization", "Basic " + token);

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const sessionData = await fetch("/openmrs/ws/rest/v1/session", requestOptions)
    const session = await sessionData.json()
    if (session.authenticated ===  true)
    {
        return {sessionId: session.sessionId, token: token, superUseruuid: session.user.uuid}
    }
    } catch (error) {
        console.log(error);
        return null
    }


}


// sample response we only need the sessionid
// {
//     "sessionId": "2D158E83ACFB788998C7DB495F07C1B9",
//     "authenticated": true,
//     "user": {
//         "uuid": "45ce6c2e-dd5a-11e6-9d9c-0242ac150002",
//         "display": "admin",
//         "username": "admin",
//         "systemId": "admin",
//         "userProperties": {
//             "loginAttempts": "0",
//             "emrapi.lastViewedPatientIds": "508,509,511,512,513,514,515,516,517,510,518,519,520,521,522,523,524,507,44,525"
//         },
//         "person": {
//             "uuid": "24252571-dd5a-11e6-9d9c-0242ac150002"
//         },
//         "privileges": [],
//         "roles": [
//             {
//                 "uuid": "8d94f852-c2cc-11de-8d13-0010c6dffd0f",
//                 "name": "System Developer"
//             },
//             {
//                 "uuid": "8d94f280-c2cc-11de-8d13-0010c6dffd0f",
//                 "name": "Provider"
//             }
//         ]
//     },
//     "locale": "en_GB",
//     "allowedLocales": [
//         "en",
//         "en_GB",
//         "es",
//         "fr",
//         "it",
//         "pt"
//     ],
//     "sessionLocation": null
// }


export async function endSession(
    token: string,
    sessionId: string
){

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + token);
    myHeaders.append("Cookie", "JSESSIONID=" + sessionId);

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    };

    try {
        const logoutResult =  await fetch("/ws/rest/v1/session", requestOptions);
    const logout = await logoutResult.json();
    return logout;
    } catch (error) {
        console.log(error);
    }
}