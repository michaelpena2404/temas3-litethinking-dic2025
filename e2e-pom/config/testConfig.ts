import { PassThrough } from "stream";

export const testConfig ={
    baseUrl : 'https://www.saucedemo.com/',
    credentials : {
        standdardUser: {
            username: 'standard_user',
            password: 'secret_sauce'
        },
        lockedUser:{
            username: 'locked_out_user',
            Password: 'secret_sauce'
        }
    }
}