angular.module("duadvisor.env", [])
.constant("ENV", {
 "environment": "stage",
 "backendEndpoint": "http://stage.api.duadvisor.hr/public",
 "enableLogging": true,
 "s3UploadBucket": "duadvisor-files-stage",
 "googleMapsApiKey": "AIzaSyBjAIooUetXhVZ5r9_t50NU8C_PE_vIrTM"
});
