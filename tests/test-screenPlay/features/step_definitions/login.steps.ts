import { Given, When, Then, Before, After } from '@cucumber/cucumber';
import { Actor } from '../../../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../../../e2e-screenplay/tasks/Tasks';
import { Ensure } from '../../../../e2e-screenplay/questions/Questions';
import { LoginUi } from '../../../../e2e-screenplay/ui/LoginUi';
import { testConfig } from '../../../../e2e-screenplay/fixture/testConfig';
import { Page, expect , chromium} from '@playwright/test';

let page: Page;
let actor: Actor;
let browaser: any;

Before(async function (){
    browaser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    const context = await browaser.newContext();
    page =  await context.newPage();
});

After (async function (){
    await browaser.close();
});

Given('que Michael esta en la pagina de inicio de sesion', async function () {
    actor = Actor.named('Michael', page);
    await actor.attemptsTo(
        OpenApp.at(testConfig.baseUrl)
    );
});

When('inicia sesipn con usuario {string} y contrasena {string}', async function (username: string, password: string) {
    await actor.attemptsTo(
        Login.withCredentials(username, password)
    );
});

Then('deberia ver la pagina de productos', async function (){
    const isProductsVisible = await Ensure.that(page).containsText('Products', LoginUi.LOGIN_PAGE.HEADER_TITLE);
    expect(isProductsVisible).toBeTruthy();
});

Then('deberia ver el mensaje de error {string}', async function (errorMessage: string){
    const isErrorVisible = await Ensure.that(page).containsText(errorMessage, LoginUi.LOGIN_PAGE.ERROR_MESSAGE);
    expect(isErrorVisible).toBeTruthy();
});
