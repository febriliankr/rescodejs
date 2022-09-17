var codes = [
    {
        "message": "NotRegistered",
        "code": 1001
    },
    {
        "message": "RegisterSuccess",
        "code": 1002
    },
    {
        "message": "LoginSuccess",
        "code": 1003
    },
    {
        "message": "ResourceRetrieveSuccess",
        "code": 2001
    },
    {
        "message": "ResourceUpdateSuccess",
        "code": 2002
    },
    {
        "message": "PaymentSuccess",
        "code": 2003
    },
    {
        "message": "ResourceCreationSuccess",
        "code": 2004
    },
    {
        "message": "ResourceNotYetSubmitted",
        "code": 2005
    },
    {
        "message": "InvalidAPIKey",
        "code": 4001
    },
    {
        "message": "InvalidToken",
        "code": 4002
    },
    {
        "message": "WrongCredentials",
        "code": 4003
    },
    {
        "message": "InsufficientRequest",
        "code": 4004
    },
    {
        "message": "ExpiredToken",
        "code": 4005
    },
    {
        "message": "ErrorGeneratingToken",
        "code": 4006
    },
    {
        "message": "ErrorUpdatingResources",
        "code": 4007
    },
    {
        "message": "ErrorGettingResources",
        "code": 4008
    },
    {
        "message": "ErrorCreatingResources",
        "code": 4009
    },
    {
        "message": "ErrorSendingEmail",
        "code": 4010
    },
    {
        "message": "NotSubscribed",
        "code": 4011
    },
    {
        "message": "PaymentError",
        "code": 5001
    },
    {
        "message": "PaymentWaiting",
        "code": 5002
    }
];
function interpretCode(code) {
    return codes.filter(function (line) { return line.code == code; })[0];
}
console.log(interpretCode(1001));
