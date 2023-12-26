export {};
declare global {
    interface LocationProps {
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
    interface Person {

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
    interface Name {
        givenName: string,
        middleName: string,
        familyName: string,
        preffered: boolean,
        prefix: string,
    }
     interface Address {
        preferred: boolean,
        address1: string,
        cityVillage: string,
        country: string,
        postalCode: string
    }
    interface User {
            username: string,
            password: string,
            person: Person,
            roles: any[],
        }
        interface VisitType {
            name: string,
            description: string
        }
}