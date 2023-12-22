

// Create a patient from an existing person.
// Create a patient
// To create a patient you need to specify the below properties in the request. If you are not logged in to perform this action, a 401 Unauthorized status is returned.
// Properties
// Parameter	Type	Description
// person	Person_UUID	Person resource UUID (Reqired)
// identifiers	Array[]: patientIdentifiers	List of patientIdentifiers (Required)



export async function createPatient(personuuid: any, myHeaders: Headers, baseUrl: string, locationuuid: string) {
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
        const result = await response.json();
        console.log(result)
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}