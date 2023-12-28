/**
 * fetch uuid of visit location tag.
 * 
 * Location Tags are being used to tag locations,
 * which enables the system to act based on the presence of tags on specific locations.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */
export async function getVisitLocationUUid(myHeaders: Headers, baseUrl: string){

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const visitLocationResponse = await fetch(`${baseUrl}/ws/rest/v1/locationtag?q=Visit+Location`, requestOptions)
    if (visitLocationResponse.status > 199 && visitLocationResponse.status < 300) {
        return null;
    }
    const visitLocationResult = await visitLocationResponse.json();
    const visitLocationUuid = visitLocationResult.results[0].uuid;
    return visitLocationUuid;
    } catch (error) {
         return null;
    }
};


/**
 * Get the uuid of a login location tag.
 * 
 * Location Tags are being used to tag locations,
 * which enables the system to act based on the presence of tags on specific locations.
 * @param {Headers} myHeaders  - The headers for the HTTP request.
 * @param {string} baseUrl  - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */
export async function getLoginLocationUuid(myHeaders: Headers, baseUrl: string) {
    
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow' as RequestRedirect
        };
    
       try {
        const loginLocationResponse = await fetch(`${baseUrl}/ws/rest/v1/locationtag?q=Login+Location`, requestOptions)
        if (loginLocationResponse.status > 199 && loginLocationResponse.status < 300) {
            return null;
        }
        const loginLocationResult = await loginLocationResponse.json();
        const loginLocationUuid = loginLocationResult.results[0].uuid;
        return loginLocationUuid;
       } catch (error) {
            return null;
       }
};



/**
 * Quickly filter locations with a given search query.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param  {string} locationName  - The name of the location to check.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */

export async function checkParentLocation (myHeaders: Headers,  locationName:string, baseUrl: string) {

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location?q=${locationName}&v=full`, requestOptions)
    if (locationResponse.status > 199 && locationResponse.status < 300) {
        const locationResult = await locationResponse.json();
    if (locationResult.results.length > 0) {
        return locationResult.results[0]
    }
      
    }
 
    return null;
   } catch (error) {
            return null;
   }
};



/**
 * Create a new location.
 * 
 * A Location is a physical place where a patient may be seen, such as a hospital, a room, a clinic, or a district.
 * Locations may have a hierarchy, such that each location may have one parent location.
 * A Location can have one or more Children location example Children's Ward 
 * might be location within the location Amani Clinic.
 * You might also store physical areas (for example, Eastern Province, or California) as Locations.
 * You should not use locations to represent logical ideas like All-District Hospitals.
 * They should be modeled using LocationTags.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {Object} location  - The location object to create.
 * @param {string} location.name - The name of the location.
 * @param {string} location.address1 - The address of the location.
 * @param {string} location.description - The description of the location.
 * @param {string} location.cityVillage - The city of the location.
 * @param {string} location.stateProvince - The state of the location.
 * @param {string} location.country - The country of the location.
 * @param {string} location.postalCode - The postal code of the location.
 * @param {string} location.latitude - The latitude of the location.
 * @param {string} location.longitude - The longitude of the location.
 * @param {string} location.countyDistrict - The county of the location.
 * @param {string} location.parentLocation - The parent location of the location.
 * @param {Array} location.tags - The tags of the location.
 * @param {Array} location.attributes - The attributes of the location.
 * @param  {string} locationName  - The name of the location to check.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */

export async function createParentLocation (myHeaders: Headers, location:any, locationName:string, baseUrl: string) {

    const locationExists = await checkParentLocation(myHeaders, locationName, baseUrl);
    if (locationExists) {
        return locationExists;
    }
    const visitLocationUuid = await getVisitLocationUUid(myHeaders, baseUrl);
    location.tags = [visitLocationUuid];
    const raw = JSON.stringify(location);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location`, requestOptions);
    if (locationResponse.status > 199 && locationResponse.status < 300) {
        const locationResult = await locationResponse.json();
        return locationResult;
    }

    return null;
   
   } catch (error) {
         return null;
   }
}

/**
 * Find a location by uuid.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} locationUuid  - The name of the location to check.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */

export async function getLocationByUuid (myHeaders: Headers, locationUuid:string, baseUrl: string) {

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location/${locationUuid}`, requestOptions);
    console.log(locationResponse)
    if (locationResponse.status > 199 && locationResponse.status < 300) {
        const locationResult = await locationResponse.json();
        return locationResult;
    }
     return null;
   } catch (error) {
            return null;
   }
}


/**
 * Create a new child location.
 * @param {string} parentLocattionuuid  - The uuid of the parent location.
 * @param {Object} locationData  - The location object to create.
 * @param {string} locationData.name - The name of the location.
 * @param {string} locationData.description - The description of the location.
 * @param {Headers} myHeaders - The headers for the HTTP request. 
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created location.
 */


export async function createChildLocation(parentLocattionuuid: string, locationData: {name: string, description: string}, myHeaders: Headers, baseUrl: string) {
  
    const loginLocationUuid = await getLoginLocationUuid(myHeaders, baseUrl);
    
    const raw = JSON.stringify({
        "name": locationData.name,
        "description": locationData.description,
        "parentLocation": parentLocattionuuid,
        "tags": [loginLocationUuid]
    });

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location`, requestOptions);
    if (locationResponse.status > 199 && locationResponse.status < 300) {
        const locationResult = await locationResponse.json();
        return locationResult;
    }
     return null;
   } catch (error) {
            return null;
   }
};