function handleResponse(statuscode, response) {
    switch (true) {
        case statuscode == 200:
            return "".concat(statuscode, " : ").concat(response);
            break;
        case statuscode == 404:
            return "".concat(statuscode, " : ").concat(response);
            break;
        case statuscode == 500:
            return "".concat(statuscode, " : ").concat(response);
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
