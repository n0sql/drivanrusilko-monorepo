/**
 * fetch all concept sources
 * 
 * Concepts are often managed within a dictionary (as a collection of concepts).
 * While OpenMRS has, it's own dictionary of concepts,
 * other dictionaries may exist in other systems or as
 * standardized reference terminologies (like LOINC or ICD).
 * The authorities who manage these other concept dictionaries represent "Concept Sources."
 * For eg PIH Malawi:Partners in Health Malawi concept dictionary, SNOMED CT:SNOMED Preferred mapping etc.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created person or null if not found.
 */
export async  function getAllConceptSources(myHeaders: Headers, baseUrl: string) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/conceptsource?v=default`, requestOptions);
        if (response.status > 199 && response.status < 300) {
        const result = await response.json();
        return result
        }
        return null;
    } catch (error) {
        console.log(error)
        return null;
    }
};

/**
 * 
 * fetch all concepts
 * 
 * The concept is the basic element of flexibility in OpenMRS.
 * Concepts are the individual data points collected from a population of patients. 
 * Concepts include both questions and answers. For example, blood type data is collected for a patient. 
 * The question is, "What is the blood type for the patient?",
 * with a set of discrete answers of "A, B, AB or O." We use concepts in OpenMRS to implement this.
 * The question is a concept ("blood type") and each response ("A," "B," "AB" and "O") is also a concept. 
 * For this one question, a total of 5 concepts are required.
 * What about a question where the answer is not a discrete answer?
 * If the question is "What is the name of your first pet?",
 * the answer would be expressed in a text box. 
 * It would not be possible to provide a complete list of every possible name for your pet. 
 * In this example, there would be one concept -- "name of first pet."
 * The bottom-line is that if you need a medical word within your electronic records system, 
 * it needs to be defined within the concept dictionary.
 * 
 * @param {Headers} myHeaders - The headers for the HTTP request.
 * @param  {string} baseUrl - The base URL for the API.
 * @returns A promise that resolves to the created concept source or null if not found.
 * 
 */


export async function getAllConcepts(myHeaders: Headers, baseUrl: string) {
    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };

    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/concept?v=default`, requestOptions);
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