
export async function createPerson( person: Person, myHeaders: Headers, baseUrl: string) {
  
//  first we have to check if the person exists
    const personExists = await searchPersonByName(person.names[0].givenName, myHeaders, baseUrl);
    if (personExists.results.length > 0) {
        return personExists.results[0];
    }
 else{
    var raw = JSON.stringify(person);
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    const response = await fetch(`${baseUrl}/ws/v1/person`, requestOptions)
    const result = await response.json();
    return result
 }
}


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

export async function searchPersonByName(name: string, myHeaders: Headers, baseUrl: string) {


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow' as RequestRedirect
};

try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/person?q=${name}`, requestOptions)
  const result = await response.json();
  return result
  } catch (error) {
      console.log(error)
   return null;
  }
}

export async function  searchUserByName(name: string, myHeaders: Headers,baseUrl: string) {

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/user?q=${name}`, requestOptions)
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

export async function createUserFromPerson(person:Person, userdata: Omit<User, "person" >, myHeaders: Headers, baseUrl: string) {
    const userExists = await searchUserByName(userdata.username, myHeaders, baseUrl);
    if (userExists.results.length > 0) {
        return userExists.results[0];
    }
    const user = {...userdata, person:person}
    var raw = JSON.stringify(user);
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
   try {
    const response = await fetch("/ws/rest/v1/user", requestOptions)
    const result = await response.json();
    return result
   } catch (error) {
         console.log(error)
         return null;
   }
}



