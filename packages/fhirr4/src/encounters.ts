/**
 * Creates a new encounter type.
 * Encounters represent an interaction between the patient and the healthcare system.
 * Since there are a wide variety of ways in which these interactions may occur,
 * OpenMRS allows you to categorize them by defining different types of encounter.
 * For example, "Adult Primary Care Initial Visit" and "In-Between Visit Documentation" could be different types of encounters.
 * 
 * @param  encounterType - The encounter type object containing the name and description.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns {Promise<any>} A promise that resolves to the created encounter type.
 */
export async function createEncounterType(encounterType: any, myHeaders: Headers, baseUrl: string): Promise<any> {
    const raw = JSON.stringify({
        "name": encounterType.name,
        "description": encounterType.description
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/encountertype`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}



/**
 * fetch all encounter types
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns {Promise<any>} A promise that resolves to the filtered encounter types.
 *
 */
export async function getAllEncounterTypes( myHeaders: Headers, baseUrl: string): Promise<any> {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/encountertype?v=default`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result.results
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}


/**
 * Quickly filter encounter types with given query parameters.
 * 
 * @param {string} query - The query parameters to filter with.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns {Promise<any>} A promise that resolves to the filtered encounter types.
 *
 */
export async function getEncounterType(query: string, myHeaders: Headers, baseUrl: string): Promise<any> {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };
 const allEncounterTypes = await getAllEncounterTypes(myHeaders, baseUrl);

 const encounterType = allEncounterTypes.find((encounterType: any) => encounterType.name === query);
 if (encounterType) {
     return encounterType;
 }
 return null;
    
}


/**
 * Retrieve an encounter type by its UUID.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} encounterTypeUuid - The UUID of the encounter type to retrieve.
 * @param {string} baseUrl - The base URL for the API.
 * @returns {Promise<any>} A promise that resolves to all the encounter types.
 * 
 */

export async function getEncounterTypeByUuid(myHeaders: Headers, encounterTypeUuid: string, baseUrl: string): Promise<any> {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/encountertype/${encounterTypeUuid}`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}



/**
 * fetches uuid of an encounterrole called 'Clinician'
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns {Promise<any>} A promise that resolves to the updated encounter type.
 * 
 */

export async function getClinicianEncounterRoleUuid(myHeaders: Headers, baseUrl: string): Promise<any> {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/encounterrole?q=Clinician`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result.results[0].uuid
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}
// main hospital
// mental health clinic
// sexual health clinic
// hair clinic
// nutrition clinic
// fitness clinic





// visit-type depression; location mental health clinic
// visit-type schizophrenia ; location mental health clinic
// visit-type bipolar ; location mental health clinic
// visit-type anxiety ; location mental health clinic
// visit-type ptsd ; location mental health clinic
// visit-type erectile dysfunction ; location sexual health clinic
// visit-type premature ejaculation ; location sexual health clinic
// visit-type low libido ; location sexual health clinic
// visit-type hair loss ; location hair clinic


// encounter type depression assessment ; form depression assessment form
// encounter type schizophrenia assessment ; form schizophrenia assessment form
// encounter type bipolar assessment  ; form bipolar assessment form
// encounter type anxiety assessment ; form anxiety assessment form
// encounter type ptsd assessment ; form ptsd assessment form
// encounter type erectile dysfunction assessment ; form erectile dysfunction assessment form
// encounter type premature ejaculation assessment ; form premature ejaculation assessment form
// encounter type low libido assessment ;  form low libido assessment form
// encounter type hair loss assessment ;  form hair loss assessment form



// encounter type erectile dysfunction assessment
// encounter type premature ejaculation assessment
// encounter type low libido assessment


// encounter type hair loss assessment
// encounter type hair transplant assessment
// encounter type hair removal assessment


// encounter type nutrition assessment
// encounter type fitness assessment
// encounter type weight loss assessment
// encounter type weight gain assessment








