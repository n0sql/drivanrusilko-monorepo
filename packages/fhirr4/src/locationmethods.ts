export async function getDefaultChildLocations(token:string, sessionId:string){
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + token);
    myHeaders.append("Cookie", "JSESSIONID=" + sessionId);
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    
    const visitLocationResponse = await fetch(`/ws/rest/v1/locationtag?q=Visit+Location`, requestOptions)
    const visitLocationResult = await visitLocationResponse.json();
    const visitLocationUuid = visitLocationResult.results[0].uuid;
    const metadata = { locationTag: visitLocationUuid, childLocations: []};
    const allChildLocationsResponse = await fetch(`/ws/rest/v1/location?tag=Login+Location`, requestOptions)
    const allChildLocationsResult = await allChildLocationsResponse.json();
    const allChildLocations = allChildLocationsResult.results;
    metadata['childLocations'] = allChildLocations;
    return metadata;
}

export async function checkParentLocation (token:string, sessionId:string,  locationName:string) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + token);
    myHeaders.append("Cookie", "JSESSIONID=" + sessionId);
    myHeaders.append("Content-Type", "application/json");

   try {
    const locationResponse = await fetch(`/ws/rest/v1/location?q=${locationName}&v=default`, {method: 'GET', headers: myHeaders, redirect: 'follow' as RequestRedirect})
    const locationResult = await locationResponse.json();
    if (locationResult.results.length > 0) {
        return locationResult.results[0]
    }
 
    return null;
   } catch (error) {
            console.log(error);
            return null;
   }
}


export async function createParentLocation (token:string, sessionId:string, location:Location, locationName:string) {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic " + token);
    myHeaders.append("Cookie", "JSESSIONID=" + sessionId);
    myHeaders.append("Content-Type", "application/json");

    const locationExists = await checkParentLocation(token, sessionId, locationName);
    if (locationExists) {
        return locationExists;
    }
    const metadata = await getDefaultChildLocations(token, sessionId);

    location.childLocations = metadata.childLocations.map((childLocation: any) => childLocation.uuid);
    location.tags = [metadata.locationTag];
    const raw = JSON.stringify(location);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch("/ws/rest/v1/location", requestOptions);
    const locationResult = await locationResponse.json();
    return locationResult;
   } catch (error) {
         console.log(error);
         return null;
   }
}

export interface Location {
    name: string,
    address1: string,
    description: string,
    cityVillage: string,
    stateProvince: string,
    country: string,
    postalCode: string,
    latitude: string,
    longitude: string,
    countyDistrict: string,
    tags: string[],
    parentLocation: null,
    childLocations: string[],
    attributes: string[]
}