import { test, expect} from '@playwright/test';
import { Actor } from '../../e2e-screenplay/actors/Actor';
import { OpenApp, Login } from '../../e2e-screenplay/tasks/Tasks';
import { Ensure } from '../../e2e-screenplay/questions/Questions';
import { LoginUi } from '../../e2e-screenplay/ui/LoginUi';
import { testConfig } from '../../e2e-screenplay/fixture/testConfig';

test.describe('Login Feature', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        //Given
        const actor = Actor.named('Michael', page);

        //When
        await actor.attemptsTo(
            OpenApp.at(testConfig.baseUrl),
            Login.withCredentials(testConfig.credentials.standardUser.username, testConfig.credentials.standardUser.password)
        );

        //Then
        const isProductsVisible = await Ensure.that(page).containsText('Products', LoginUi.LOGIN_PAGE.HEADER_TITLE);
        expect(isProductsVisible).toBeTruthy();
    });

    test('should login locked out user with invalid credentials', async ({ page }) => {
        //Given
        const actor = Actor.named('Michael', page);

        //When
        await actor.attemptsTo(
            OpenApp.at(testConfig.baseUrl),
            Login.withCredentials(testConfig.credentials.lockedUser.username, testConfig.credentials.lockedUser.password)
        );

        //then
        const isErrorVisible = await Ensure.that(page).containsText('Epic sadface: Sorry, this user has been locked out.', LoginUi.LOGIN_PAGE.ERROR_MESSAGE);
        expect(isErrorVisible).toBeTruthy();
    } );
})  