
import base64 from 'js-base64';

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
    const token = base64.encode(username && password ? username + ":" + password : "admin:Admin123");
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