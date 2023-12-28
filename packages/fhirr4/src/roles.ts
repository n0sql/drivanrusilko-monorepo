/**
 * @file roles.ts
 * @summary Methods for interacting with the OpenMRS REST API to manage roles.
 * @description This file contains methods for interacting with the OpenMRS REST API to manage roles.
 * 
 */




/**
 * fetch all roles
 * A Role represents a group of privileges in the system.
 * Roles may inherit privileges from other roles,
 * and users may have one or more roles.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function getAllRoles(myHeaders: Headers, baseUrl: string) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/role?v=default`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}


/**
 * fetch all privileges
 * 
 * A Privilege is an authorization to perform a particular action in the system.
 * The list of available privileges are defined by the core system and by add-on modules (for example, Delete Patients),
 * but you need to configure which roles have which privileges while you are configuring your system.
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async function getAllPrivileges (myHeaders: Headers, baseUrl: string) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/privilege?v=default`, requestOptions);
        if (response.status > 199 && response.status < 300) {
            const result = await response.json();
            return result;
        }
        return null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

/**
 * fetch role uuid by role name
 * 
 * @param {Headers} myHeaders  - The headers for the HTTP request.
 * @param {String} baseUrl  - The base URL for the API.
 * @param {String} providerRoleName  - The name of the role to search for.
 * @returns  A promise that resolves to the created person or null if not found.
 */


export async function fetchRoleUUID (myHeaders: Headers, baseUrl: string, providerRoleName: string) {
    const allRoles = await getAllRoles(myHeaders, baseUrl);
    const roleUUID = allRoles.results.find((role: any) => role.name === providerRoleName).uuid;
    if (roleUUID) {
        return roleUUID;
    }
    return null;

}