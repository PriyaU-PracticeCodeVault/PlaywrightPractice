function handleResponse(statuscode1: number, response:string) : Object ;
function handleResponse(statuscode2: number, response:string) : null ;
function handleResponse(statuscode3: number, response:string) : Error ;

function handleResponse(statuscode: number, response: string) : Object | null | Error {

    switch (true) {

        case statuscode == 200:
            return `${statuscode} : ${response}`
            break;
        case statuscode == 404:
            return `${statuscode} : ${response}`;
            break;
        case statuscode == 500:
            return `${statuscode} : ${response}`;
            break;
        default:
            response = 'No such repsonse code';
    }

    return response;

}

console.log(handleResponse(200, 'Success'));
console.log(handleResponse(404, 'Page Not Found'));
console.log(handleResponse(500, 'Server connection Failed'));
console.log(handleResponse(505, 'test'));






