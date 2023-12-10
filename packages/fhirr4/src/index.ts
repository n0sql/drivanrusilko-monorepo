import * as R4 from 'fhir'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic YWRtaW46QWRtaW4xMjM=");
myHeaders.append("Cookie", "JSESSIONID=2D158E83ACFB788998C7DB495F07C1B9");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
};

fetch("/openmrs/ws/rest/v1/session", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
export {R4}

