
import { encode } from 'js-base64';

/**
 * Initialize a session with the OpenMRS REST API.
 * @param {Object} attributes - The attributes of the sesssion initialization.
 * @param {string} attributes.username - The username of the user to login.
 * @param {string} attributes.password - The password of the user to login.
 * @param {string} attributes.baseUrl - The base URL for the API.
 * @returns {Promise<Headers | undefined | null>} A promise that resolves to the headers of the session.
 */
export async function initializeSession({
    username,
    password,
    baseUrl,
    }: {
    username: string | undefined;
    password: string | undefined;
    baseUrl: string
}): Promise<Headers | undefined | null> {
    
    const myHeaders = new Headers();
    const token = encode(username && password ? username + ":" + password : "admin:Admin123");
    myHeaders.append("Authorization", "Basic " + token);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };

    try {
        const sessionData = await fetch(`${baseUrl}/ws/rest/v1/session`, requestOptions);
    const session = await sessionData.json()
    if (session.authenticated ===  true)
    {
        myHeaders.append("Cookie", "JSESSIONID=" + session.sessionId);
        return myHeaders
    }
    } catch (error) {
        console.log(error);
        return null
    }
}


/**
 * End the current session.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */
export async function endSession(myHeaders: Headers, baseUrl: string){

    const requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
    };

    try {
    const logoutResult =  await fetch(`${baseUrl}/ws/rest/v1/session`, requestOptions);
    const logout = await logoutResult.json();
    return logout;
    } catch (error) {
        console.log(error);
    }
}