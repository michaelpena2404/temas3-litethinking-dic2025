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