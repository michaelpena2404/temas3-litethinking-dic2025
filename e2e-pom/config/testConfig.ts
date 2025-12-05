export const testConfig ={
    baseUrl : 'https://www.saucedemo.com/',
    credentials : {
        standdardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedUser:{
            username: 'locked_out_user',
            password: 'secret_sauce'
        }
    },
    errorMessages:{
        lockedUserError: 'Epic sadface: Sorry, this user has been locked out.'
    }
}

export const testConfigUAT ={
    baseUrl : 'https://www.saucedemo.uat.com/',
    credentials : {
        standdardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedUser:{
            username: 'locked_out_user',
            password: 'secret_sauce'
        }
    },
    errorMessages:{
        lockedUserError: 'Epic sadface: Sorry, this user has been locked out.'
    }
}