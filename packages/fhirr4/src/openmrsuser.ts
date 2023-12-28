import { fetchRoleUUID } from "./roles";
/**
 * Every individual who is referred to in a patient record in OpenMRS is stored in the system as a Person.
 * These include Patients, any patient relative or caretaker, Providers, and Users
 * @param {Object} person  - The person object to create.
 * @param {Array} person.names - The names of the person.
 * @param {string} person.names[0].givenName - The given name of the person.
 * @param {string} person.names[0].middleName - The middle name of the person.
 * @param {string} person.names[0].familyName - The family name of the person.
 * @param {boolean} person.names[0].preferred - The preferred name of the person.
 * @param {string} person.names[0].prefix - The prefix of the person.
 * @param {string} person.gender -  The gender of the person
 * @param {number} person.age - The age of the person.
 * @param {string} person.birthDate - The birth date of the person.
 * @param {boolean} person.birthDateEstimated - The birth date estimated of the person.
 * @param {string} person.birthTime - The birth time of the person.
 * @param {boolean} person.dead - The dead status of the person.
 * @param {Array} person.addresses - The addresses of the person.
 * @param {boolean} person.addresses[0].preferred - The preferred address of the person.
 * @param {string} person.addresses[0].address1 - The address1 of the person.
 * @param {string} person.addresses[0].cityVillage - The cityVillage of the person.
 * @param {string} person.addresses[0].country - The country of the person.
 * @param {string} person.addresses[0].postalCode - The postalCode of the person.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns - A promise that resolves to the created person.
 *
 */
export async function createPerson(person: any, myHeaders: Headers, baseUrl: string) {
try {

    const raw = JSON.stringify({
        "names": [
        {
          "givenName": person.names[0].givenName,
          "middleName": person.names[0].middleName,
          "familyName": person.names[0].familyName,
          "preferred": true,
          "prefix": person.names[0].prefix
        }
      ],
      "gender": person.gender,
      "age": Number(person.age),
      "birthdate":  person.birthDate,
      "birthdateEstimated": false,
      "dead": false,
      "addresses": [
        {
          "preferred": true,
          "address1":  person.addresses[0].address1,
          "cityVillage": person.addresses[0].cityVillage,
          "stateProvince": person.addresses[0].stateProvince,
          "country": "USA",
          "postalCode": person.addresses[0].postalCode,
          "countyDistrict": person.addresses[0].countyDistrict
        }
      ],
      "deathdateEstimated": false
    })

    
    const requestOptions = {
       method: 'POST',
       headers: myHeaders,
       body:  raw,
       redirect: 'follow' as RequestRedirect
     };
     const response = await fetch(`${baseUrl}/ws/rest/v1/person`, requestOptions);
     if (response.status > 199 && response.status < 300) {
     const result = await response.json();
  
     return result
     };
      return null;
} catch (error) {
     console.log(error);
     return null;
}
}





/**
 * search for a person by uuid
 * 
 * @param {string} name  - The name of the user to search for.
 * @param {Headers} myHeaders - The headers for the HTTP request. 
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 * 
 */



export async function searchPersonByName(name: string, myHeaders: Headers, baseUrl: string) {


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/person?q=${name}&v=full`, requestOptions)
    if (response.status > 199 && response.status < 300) {
  const result = await response.json();
  return result}
    return null;
  } catch (error) {
      console.log(error)
   return null;
  }
}



/**
 * search for a person by uuid
 * 
 * @param {string} name  - The name of the user to search for.
 * @param {Headers} myHeaders - The headers for the HTTP request. 
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 * 
 */
export async function  searchUserByName(name: string, myHeaders: Headers, baseUrl: string) {

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,

    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/user?q=${name}&v=full`, requestOptions);
        if (response.status > 199 && response.status < 300) {
        
        const result = await response.json();
        return result
    };
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}

/**
 * Search for a user by uuid.
 * 
 * @param {string} uuid  - The uuid of the user to search for.
 * @param {Headers} myHeaders - The headers for the HTTP request. 
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 * 
 */

export async function searchUserByUuid (uuid: string, myHeaders: Headers, baseUrl: string) {

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/user/${uuid}`, requestOptions);
        if (response.status > 199 && response.status < 300) {

        const result = await response.json();
        return result
        };
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}





/**
 * Method for creating a user record for an existing person.
 * the existing person must only be referenced by UUID.
 * 
 * @param  {Object} userdata - The user data to create.
 * @param  {string} userdata.username - The username of the user.
 * @param  {string} userdata.password - The password of the user.
 * @param  {string} userdata.person - The person uuid of the user.
 * @param  {Array} userdata.roles - The roles of the user.
 * @param  {Headers} myHeaders - The headers for the HTTP request. 
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function createUserFromPerson(userdata: any, myHeaders: Headers, baseUrl: string) {
    const fullprivilegerole =  await fetchRoleUUID( myHeaders, baseUrl, "Privilege Level: Full");
    const raw = JSON.stringify({
        "username": userdata.username,
        "password": userdata.password,
        "person": userdata.person,
        "roles": [fullprivilegerole]
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
   try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/user`, requestOptions);

    if (response.status > 199 && response.status < 300) {
        const result = await response.json();
        return result
    };
    return null;
   } catch (error) {
         console.log(error)
         return null;
   }
}




/**
 * Creates a provider from an existing person.
 * A Provider is a person who provides care or services to patients. 
 * A provider may be a clinician like a doctor or a nurse, a social worker, or a lab tech.
 * Generally speaking, any healthcare worker that a patient can have an encounter with is a provider.
 * 
 * @param {string} personuuid  - Person UUID	Target person who will be a provider for OpenMRS (required)
 * @param {Headers}  myHeaders  - The headers for the HTTP request.
 * @param {string}  baseUrl  - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function createProvider(personuuid: string, myHeaders: Headers, baseUrl: string) {
    const raw = JSON.stringify({
        "person": personuuid,
        "identifier":"doctor",
        "attributes": [],
        "retired": false
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/provider`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
         
            return result
        };
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}

/**
 * Fetches a provider by uuid.
 * 
 * @param {string} personuuid  - Person UUID	Target person who will be a provider for OpenMRS (required)
 * @param {Headers} myHeaders  - The headers for the HTTP request.
 * @param {string} baseUrl  - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */

export async function searchProviderByPersonUuid(personuuid: string, myHeaders: Headers, baseUrl: string) {
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/provider?person=${personuuid}`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result
        };
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
}