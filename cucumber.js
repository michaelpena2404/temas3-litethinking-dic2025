module.exports = {
    default: {
        requireModule: ['ts-node/register'],
        require: ['tests/test-screenPlay/features/step_definitions/*.ts'],
        format: ['@cucumber/pretty-formatter'],
        paths: ['tests/test-screenPlay/features/*.feature'],
        worldParameters: {
            playwright: {
                config: './playwright.config.ts',
                launchOptions: {
                    headless: false,
                    slowMo: 1000
                }
            }
        },
        publishQuiet: true
    }
}