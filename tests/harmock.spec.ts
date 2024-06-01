import { test, expect } from '@playwright/test';

// Define a test suite named 'Initiation display - Cases with destination'
test('Initiation display - Cases with destination', async ({ page }) => {
    // Intercept network requests based on a HAR (HTTP Archive) file to simulate or modify the network responses
    await page.routeFromHAR('path/to/the/harfile.har', {
        update: true,               // Update the HAR file with new network interactions
        updateContent: "embed",     // Embed the updated content within the HAR file
        updateMode: "minimal",      // Update only the minimum required fields in the HAR file
        url: "**/**/graphql"        // Intercept only requests matching this URL pattern (typically GraphQL requests)
    });

    // Interact with the page

});
