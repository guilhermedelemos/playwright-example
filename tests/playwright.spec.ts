import { test, expect, Page } from '@playwright/test';
import { PlaywrightPage } from '../pages/PlaywrightPage';

test.describe('Playwright', () => {

  test('getting started should contain table of contents @playwright', async ({ page }) => {
    test.info().annotations.push({ type: 'requirement', description: 'REQ-001' });
    const playwrightDev = new PlaywrightPage(page);
    await playwrightDev.navigate();
    await playwrightDev.getStarted();
    await expect(playwrightDev.tocList).toHaveText([
      'Installation',
      'First test',
      'Configuration file',
      'Writing assertions',
      'Using test fixtures',
      'Using test hooks',
      'VS Code extension',
      'Command line',
      'Configure NPM scripts',
      'Release notes'
    ]);
  });
    
  test('should show Page Object Model article @pom', async ({ page }) => {
    const playwrightDev = new PlaywrightPage(page);
    await playwrightDev.navigate();
    await playwrightDev.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
  });
});
