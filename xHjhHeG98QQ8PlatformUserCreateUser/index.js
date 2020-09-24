
/**
 * Nome da primitiva : createUser
 * Nome do dominio : platform
 * Nome do serviço : user
 * Nome do tenant : trn82981406
 **/

exports.handler = async (event) => {
  let body = parseBody(event);
  
  body.hello = "Hello";
  
  return sendRes(200, body);
};

const parseBody = (event) => {
    return typeof event.body === 'string' ?  JSON.parse(event.body) : event.body || {};
};

const sendRes = (status, body) => {
    var response = {
      statusCode: status,
      headers: {
        "Content-Type": "application/json"
      },
      body: typeof body === 'string' ? body : JSON.stringify(body) 
    };
    return response;
};
  