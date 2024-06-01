# playwright-mocks-ts

## Installation
Install the project with npm

```bash
git clone https://github.com/omarchouikh/playwright-mocks.git
```
```bash
npm i
```

## 1. Intercept Call & Fulfill with JSON File
This test intercepts GraphQL network requests and fulfills them with a predefined JSON file.

### Explanation
The script uses page.route to intercept GraphQL requests.
When a request matches the URL pattern **/**/graphql, it fulfills the request with a JSON file located at path/to/the/file.json.
You can add additional interactions with the page where indicated by the comment.


## 2. Initiation Display - Cases with Destination
This test intercepts network requests based on a HAR (HTTP Archive) file and updates it with new interactions.

### Explanation
The script uses page.routeFromHAR to route network requests based on a HAR file.

The HAR file located at path/to/the/harfile.har is updated with new network interactions.

The updateContent: "embed" option embeds the updated content within the HAR file.

The updateMode: "minimal" option ensures only necessary updates are made.

The url: "**/**/graphql" option specifies that only requests matching this pattern are intercepted.

Additional interactions with the page can be added where indicated by the comment.


## Running the Tests
```bash
    npx playwright test
```

Make sure to replace path/to/the/file.json and path/to/the/harfile.har with the actual paths to your JSON and HAR files, respectively.

**Enjoy :D**
