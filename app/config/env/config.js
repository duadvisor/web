angular.module("duadvisor.env", [])
.constant("ENV", {
 "environment": "production",
 "backendEndpoint": "http://api.duadvisor.hr/public",
 "enableLogging": true,
 "s3UploadBucket": "duadvisor-files",
 "googleMapsApiKey": "AIzaSyBjAIooUetXhVZ5r9_t50NU8C_PE_vIrTM"
});
