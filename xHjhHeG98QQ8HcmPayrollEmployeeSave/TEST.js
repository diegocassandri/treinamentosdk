const payload = require('./lambda-payloads.json');
const employeeSave = require('./index');

employeeSave.handler(payload.xHjhHeG98QQ8HcmPayrollEmployeeSave.lambda).then(response => console.log(response));

