
export async function createPerson( person: Person, token: string, sessionId: string) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", `JSESSIONID=${sessionId}`);
  myHeaders.append("Content-Type", "application/json");
//  first we have to check if the person exists
    const personExists = await searchPersonByName(person.names[0].givenName, token, sessionId);
    if (personExists.results.length > 0) {
        return personExists.results[0];
    }
 else{
    var raw = JSON.stringify(person);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow' as RequestRedirect
    };
  
    const response = await fetch("/openmrs/ws/v1/Person", requestOptions)
    const result = await response.json();
    return result
 }
}

// a person data looks like this:
// names	Array[] : names	List of names
// gender	String	The patient's gender ("M" for male, "F" for female, or "U" for unknown)
// age	Integer	The estimated age in years. Used when birthdate is unknown.
// birthDate	String	Date of birth of a person
// birthDateEstimated	Boolean	True if the birthdate is estimated; false if birthdate is accurate.
// birthTime	String	The time of birth of the person
// dead	Boolean	True if the patient is dead.
// deathDate	String	Date of death of the person
// causeOfDeath	Concept UUID	Reason for the death of the person
// deathdateEstimated	Boolean	true if deathDate is estimate; false if deathDate is accurate
// addresses	Array[] : addresses	The address details aggregated in an array
// attributes	Array[] : attributes	The attribute details aggregated in an array

// sample addressses looks like this 
// "addresses": [
//     {
//     "address1": "30, Vivekananda Layout, Munnekolal,Marathahalli",
//     "cityVillage": "Bengaluru",
//     "country": "India",
//     "postalCode": "560037"
//     }
// ]

// create an interface for the person data

// also names looks like this
// "names": [
//     {
//     "givenName": "Mohit",
//     "familyName": "Kumar"
//     }
// ],
export interface Address {
    preferred: boolean,
    address1: string,
    cityVillage: string,
    country: string,
    postalCode: string
}

export interface Name {
    givenName: string,
    middleName: string,
    familyName: string,
    preffered: boolean,
    prefix: string,
}

export interface Person {

    names: Name[],
    gender: string,
    age: number,
    birthDate: string,
    birthDateEstimated: boolean,
    birthTime: string,
    dead: boolean,
    deathDate: string,
    causeOfDeath: string,
    deathdateEstimated: boolean,
    addresses: Address[],
    attributes: any[]
}

export async function searchPersonByName(name: string, token: string, sessionId: string) {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  myHeaders.append("Cookie", `JSESSIONID=${sessionId}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect
};

try {
    const response = await fetch(`/openmrs/ws/rest/v1/person?q=${name}`, requestOptions)
  const result = await response.json();
  return result
  } catch (error) {
      console.log(error)
   return null;
  }
}

export async function  searchUserByName(name: string, token: string, sessionId: string) {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", `JSESSIONID=${sessionId}`);
    
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow' as RequestRedirect
    };
    
    try {
        const response = await fetch(`/openmrs/ws/rest/v1/user?q=${name}`, requestOptions)
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}


// we need to create an interface for the user data
// name	String	Name of the user
// description	String	Description of the user
// username	String	username of the user
// password	String	password of the user
// person	String	person resource associated with the user
// systemId	String	a unique identifier assigned to each user
// roles	Array[] : role	a list of roles attributed to the user
// userProperties	JSON Object	A set of key value pairs. Used to store user specific data

    export interface User {
        name: string,
        description: string,
        username: string,
        password: string,
        person: Person,
        roles: any[],
    }

export async function createUserFromPerson(person:Person, userdata: Omit<User, "person" >, token:string, sessionId:string) {
    const userExists = await searchUserByName(userdata.username, token, sessionId);
    if (userExists.results.length > 0) {
        return userExists.results[0];
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);
    myHeaders.append("Cookie", `JSESSIONID=${sessionId}`);
    myHeaders.append("Content-Type", "application/json");
    const user = {...userdata, person:person}
    var raw = JSON.stringify(user);
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
   try {
    const response = await fetch("/openmrs/ws/rest/v1/user", requestOptions)
    const result = await response.json();
    return result
   } catch (error) {
         console.log(error)
         return null;
   }
}



