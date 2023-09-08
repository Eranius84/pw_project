import { test, expect } from '@playwright/test';

  
test('assert 200 status', async ({ page }) => {
    const response = await page.request.get('https://api.example.com');
    expect(response.status()).toMatch('200'||'201');
  });
