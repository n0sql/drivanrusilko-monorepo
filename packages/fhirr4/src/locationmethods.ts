

export async function getDefaultChildLocations(myHeaders: Headers, baseUrl: string){

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    const visitLocationResponse = await fetch(`${baseUrl}/ws/rest/v1/locationtag?q=Visit+Location`, requestOptions)
    const visitLocationResult = await visitLocationResponse.json();
    const visitLocationUuid = visitLocationResult.results[0].uuid;
    const metadata = { locationTag: visitLocationUuid, childLocations: []};
    const allChildLocationsResponse = await fetch(`${baseUrl}/ws/rest/v1/location?tag=Login+Location`, requestOptions)
    const allChildLocationsResult = await allChildLocationsResponse.json();
    const allChildLocations = allChildLocationsResult.results;
    metadata['childLocations'] = allChildLocations;
    return metadata;
}

export async function checkParentLocation (myHeaders: Headers,  locationName:string, baseUrl: string) {

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location?q=${locationName}&v=full`, requestOptions)
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


export async function createParentLocation (myHeaders: Headers, location:Location, locationName:string, baseUrl: string) {

    const locationExists = await checkParentLocation(myHeaders, locationName, baseUrl);
    if (locationExists) {
        return locationExists;
    }
    const metadata = await getDefaultChildLocations(myHeaders, baseUrl);

    location.childLocations = metadata.childLocations.map((childLocation: any) => childLocation.uuid);
    location.tags = [metadata.locationTag];
    const raw = JSON.stringify(location);

    const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location`, requestOptions);
    const locationResult = await locationResponse.json();
    return locationResult;
   } catch (error) {
         console.log(error);
         return null;
   }
}

export async function getLocationByUuid (myHeaders: Headers, locationUuid:string, baseUrl: string) {

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

   try {
    const locationResponse = await fetch(`${baseUrl}/ws/rest/v1/location/${locationUuid}`, requestOptions)
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