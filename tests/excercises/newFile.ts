import { test } from '@playwright/test';
import { request } from '@playwright/test';


const testUrl = 'http://playground.kinemadev.com:8000/authentication/login'

test('valid user status code and text', async ({ request }) => {
    interface UserData {
        username: string;
        password: string;
    }
    interface RespData {
        message: string;
        access_token: string;
    }
    

    //initial request data check
    const userData = await request.post(testUrl, {
        data: {
            "username": "user1",
            "password": "password1",
        } as UserData //synthax for implelent as intterface
      });
    const respBody = await userData.json();
    console.log(JSON.stringify(respBody));
    //expect(respBody.username).toBe("user1");
    //expect(respBody.password).toBe("password1");
   // expect(respBody.access_token).toBe
    });


