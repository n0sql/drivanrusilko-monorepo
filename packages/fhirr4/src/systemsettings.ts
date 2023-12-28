
/**
 *
 * Gets all system settings.
 * 
 * System Settings are used to store module and system-wide settings.
 * They primarily consist of a property name and a value and a description explaining how this property is being used.
 * System Settings are configuration variables that can be modified without
 * restarting or recompiling the application. They're useful when module code
 * needs to refer to a value that's unique to a particular installation,
 * such as a concept ID number or a file path.
 * some examples : system-wide setting: Default Location which specifies the name of the location to use as a system default.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function getAllSystemSettings( myHeaders: Headers, baseUrl: string) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/systemsetting?v=full`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
};


/**
 * Gets a system setting filtered by property.
 * @param {string} property - The property to filter by.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */

export async function filterSystemSettingsByProperty(property: string, myHeaders: Headers, baseUrl: string) {
    
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/systemsetting?property=${property}`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result.results
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }

};

/**
 * updateSystemSettings - Updates a system setting.
 * @param {string} property - The property to filter by.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function updateSystemSettings(myHeaders: Headers, baseUrl: string, property:string, value:string) {
  const setting = await filterSystemSettingsByProperty(property, myHeaders, baseUrl);
    if (setting)
    {
        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                value: value
            })
        };
        try {
            const response = await fetch(`${baseUrl}/ws/rest/v1/systemsetting/${setting.uuid}`, requestOptions);
            if (response.status > 199 && response.status < 300) {
                const result = await response.json();
                return result.results
            }
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    };
    return null;
    

};


/**
 * 
 * updateImplementationConfig - Updates an implementation config.
 *  @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @param {Object} config - The config to update.
 * @param {string} config.name - A descriptive name for this implementation (e.g. AMRS installation in Eldoret, Kenya).
 * @param {string} config.description - Text describing this implementation. (e.g. Source for the AMPATH program in Kenya. Created by Paul Biondich).
 * @param {string} config.implementationId - This is the unique id for this implementation. Used as the HL7_CODE. Must be limited to 20 characters and numbers. The characters "^" and "
 * @param {string} config.passphrase - This text is a long text string that is used to validate who uses your implementation id.Multiple installations of openmrs can use the same implmentation id, but they must all know the passphrase
 * @returns  A promise that resolves to the created person or null if not found.
 */
export async function updateImplementationConfig(myHeaders: Headers, baseUrl: string, config :{[key:string]:string}) {
      
    const raw = JSON.stringify({
        name: config.name,
        description: config.description,
        implementationId: config.implementationId,
        passphrase: config.passphrase,
      });

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow' as RequestRedirect
        };

        try {
            const response = await fetch(`${baseUrl}/ws/rest/v1/implementationconfig`, requestOptions);
            if (response.status > 199 && response.status < 300) {
                const result = await response.json();
                return result.results
            }
            return null;
        } 
        catch (error) {
            return null;
        }
  
}


/**
 * updateApiSettings - Updates the API settings to allow for more than 100 max and 50 default results to 10000 each.
 * @param myHeaders  - The headers for the HTTP request.
 * @param baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */


export async function updateApiSettings(myHeaders: Headers, baseUrl: string) {
    const properties = ["webservices.rest.maxResultsAbsolute", "webservices.rest.maxResultsDefault"];
    const values = ["10000", "10000"];
    const updatedSystemSettings = await Promise.all(properties.map((property, index) => updateSystemSettings(myHeaders, baseUrl, property, values[index])));

    if (updatedSystemSettings) {
       return true;
        }
        return false;
}