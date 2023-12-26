
/**
 * 
 * Create a patient from an existing person.
 * 
 * Anyone who receives care in OpenMRS must be a Patient.
 * Every Patient must have at least one Identifier, which is explained below.
 * A Patient is also a Person, meaning they must have at least one name, and they may have addresses. 
 * 
 * @param {string} personuuid  - Person_UUID	Person resource UUID (Required)
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @param {string} locationuuid  - The location uuid to create the patient at.
 * @returns A promise that resolves to the created patient.
 */


export async function createPatient(personuuid: string, myHeaders: Headers, baseUrl: string, locationuuid: string) {
    const raw = JSON.stringify({
        "person": personuuid,
        "identifiers": [
            {
                "identifierType": "05a29f94-c0ed-11e2-94be-8c13b969e334",
                "location": locationuuid,
                "preferred": true
            }
        ]
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/patient`, requestOptions)
        if (response.status > 199 && response.status < 300) {
        const result = await response.json();
     
        return result;
    }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}