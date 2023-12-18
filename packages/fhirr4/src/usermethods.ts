
export async function createPerson( person: any, myHeaders: Headers, baseUrl: string) {
 const personExists = await searchPersonByName(person.names[0].givenName, myHeaders, baseUrl);
    if (personExists) {
        return personExists.results[0];
    }
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
     const response = await fetch(`${baseUrl}/ws/rest/v1/person`, requestOptions)
     const result = await response.json();
     console.log(result)
     return result
    
} catch (error) {
     console.log(error);
     return null;
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
    addresses: Address[],
    attributes: any[]
}

export async function searchPersonByName(name: string, myHeaders: Headers, baseUrl: string) {


  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
};

try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/person?q=${name}&v=full`, requestOptions)
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
        const response = await fetch(`${baseUrl}/ws/rest/v1/user?q=${name}&v=full`, requestOptions)
        const result = await response.json();
        console.log(result, "result")
        return result
    } catch (error) {
        console.log(error)
        return null;
    }
}

export async function searchUserByUuid (uuid: string, myHeaders: Headers,baseUrl: string) {

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
    };
    
    try {
        const response = await fetch(`${baseUrl}/ws/rest/v1/user/${uuid}`, requestOptions)
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
    username: string,
        password: string,
        person: Person,
        roles: any[],
    }

export async function createUserFromPerson(userdata: any, myHeaders: Headers, baseUrl: string) {
    console.log(userdata.password, "userdata.password")
    const raw = JSON.stringify({
        "username": userdata.username,
        "password": userdata.password,
        "person": userdata.person,
        "roles": userdata.roles
    });
    
    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow' as RequestRedirect
    };
    
   try {
    const response = await fetch(`${baseUrl}/ws/rest/v1/user`, requestOptions)
    const result = await response.json();
    console.log(result)
    return result
   } catch (error) {
         console.log(error)
         return null;
   }
}



