type Rescode = {
    message: string;
    label: string;
    code: number;
}

const rescodeObj = {
    NotRegistered: 1001,
    RegisterSuccess: 1002,
    LoginSuccess: 1003,
    ResourceRetrieveSuccess: 2001,
    ResourceUpdateSuccess: 2002,
    PaymentSuccess: 2003,
    ResourceCreationSuccess: 2004,
    ResourceNotYetSubmitted: 2005,
    InvalidAPIKey: 4001,
    InvalidToken: 4002,
    WrongCredentials: 4003,
    InsufficientRequest: 4004,
    ExpiredToken: 4005,
    ErrorGeneratingToken: 4006,
    ErrorUpdatingResources: 4007,
    ErrorGettingResources: 4008,
    ErrorCreatingResources: 4009,
    ErrorSendingEmail: 4010,
    NotSubscribed: 4011,
    PaymentError: 5001,
    PaymentWaiting: 5002,
}


const rescodeArr = [
    {
        "message": "Not registered",
        "label": "NotRegistered",
        "code": 1001
    },
    {
        "message": "Register success",
        "label": "RegisterSuccess",
        "code": 1002
    },
    {
        "message": "Login success",
        "label": "LoginSuccess",
        "code": 1003
    },
    {
        "message": "Resource retrieve success",
        "label": "ResourceRetrieveSuccess",
        "code": 2001
    },
    {
        "message": "Resource update success",
        "label": "ResourceUpdateSuccess",
        "code": 2002
    },
    {
        "message": "Payment success",
        "label": "PaymentSuccess",
        "code": 2003
    },
    {
        "message": "Resource creation success",
        "label": "ResourceCreationSuccess",
        "code": 2004
    },
    {
        "message": "Resource not yet submitted",
        "label": "ResourceNotYetSubmitted",
        "code": 2005
    },
    {
        "message": "Invalid api key",
        "label": "InvalidAPIKey",
        "code": 4001
    },
    {
        "message": "Invalid token",
        "label": "InvalidToken",
        "code": 4002
    },
    {
        "message": "Wrong credentials",
        "label": "WrongCredentials",
        "code": 4003
    },
    {
        "message": "Insufficient request",
        "label": "InsufficientRequest",
        "code": 4004
    },
    {
        "message": "Expired token",
        "label": "ExpiredToken",
        "code": 4005
    },
    {
        "message": "Error generating token",
        "label": "ErrorGeneratingToken",
        "code": 4006
    },
    {
        "message": "Error updating resources",
        "label": "ErrorUpdatingResources",
        "code": 4007
    },
    {
        "message": "Error getting resources",
        "label": "ErrorGettingResources",
        "code": 4008
    },
    {
        "message": "Error creating resources",
        "label": "ErrorCreatingResources",
        "code": 4009
    },
    {
        "message": "Error sending email",
        "label": "ErrorSendingEmail",
        "code": 4010
    },
    {
        "message": "Not subscribed",
        "label": "NotSubscribed",
        "code": 4011
    },
    {
        "message": "Payment error",
        "label": "PaymentError",
        "code": 5001
    },
    {
        "message": "Payment waiting",
        "label": "PaymentWaiting",
        "code": 5002
    }
]

function interpret(code: number) {
    return rescodeArr.filter((line) => line.code == code)[0]
}

const Resode = { ...rescodeObj, interpret }

export default Rescode