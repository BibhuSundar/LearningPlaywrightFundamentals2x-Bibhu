import { test, expect } from '@playwright/test';

const URL = 'https://www.patternfly.org/components/file-upload/multiple-file-upload/';

test.describe('FileUpload handling', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('locate FileUpload and upload', async ({ page }) => {
        const fileInput = page.locator("div.pf-v6-c-multiple-file-upload input");

        await fileInput.setInputFiles([
            {
                name: 'file1.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'file2.jpg',
                mimeType: 'image/jpeg',
                buffer: Buffer.from('this is test')
            }
        ]);

        await expect(page.getByText('file1.jpg')).toBeVisible();
        await expect(page.getByText('file2.jpg')).toBeVisible();
        await expect(page.getByText('2 of 2 files uploaded')).toBeVisible();
    })
});
