import { test, expect } from '@playwright/test';
let testURl = 'http://www.walla.com'

test('has title', async ({ page }) => {
     page.goto(testURl);

     expect(page).toHaveTitle(/וואלה! חדשות. ספורט. סלבס. אוכל - עדכונים ודיווחים שוטפים/);
  });
