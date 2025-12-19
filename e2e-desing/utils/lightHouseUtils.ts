import { Page } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

const deskopConfig = {
    extends: 'lighthouse:default',
    settings: {
    formFactor: 'desktop' as const,
    screenEmulation: {
      mobile: false,
      width: 1280,
      height: 720,
      deviceScaleRatio: 1,
      disabled: false,
    },
    emulatedUserAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36',
  },
}

export async function runLighthouse(
    page: Page,
    port: number,
    options: {name?: string, expectUrl?: string} = {},
){
    if (options.expectUrl) {
        await page.goto(options.expectUrl);
    }
    
    return await playAudit({
        page,
        port,
        opts: {
            maxWaitForLoad: 120000,
        },
        thresholds:{
            performance: 0,
            accessibility: 0,
            'best-practices': 0,
            seo:0
        },
        reports:{
            formats:{ html:true },
            name: options.name,
            directory:'lighthouse-reports'
        },
        config: deskopConfig
    })
}
