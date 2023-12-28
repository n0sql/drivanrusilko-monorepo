
/**
 * Visit Type is a name and description of a kind of visit.
 * Every visit has a type. 
 * You should create visit types that match how your health site classifies visits,
 * such as "Outpatient," "Hospitalization," "Dental," "Patient Education," or "TB Clinic.".
 * @param {Object} visitType - The visit type data to create.
 * @param {string} visitType.name - The name of the visit type.
 * @param {string} visitType.description - The description of the visit type.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl  - The base URL for the API.
 * @returns A promise that resolves to the created visit type.
 */
export async function createVisitType(visitType: any, myHeaders: Headers, baseUrl: string) {
    const raw = JSON.stringify({
        "name": visitType.name,
        "description": visitType.description
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/visittype`, requestOptions);
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
 *  Quickly filter visit types with a given search query.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl  - The base URL for the API.
 * @param {string} displayName  - The name of the visit type to check.
 * @returns A promise that resolves to the created visit type.
 */

export async function listVisitTypes(myHeaders: Headers, baseUrl: string, displayName: string) {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/visittype?q=${displayName}`, requestOptions);
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



