## Tests

We use [Hermione](https://github.com/gemini-testing/hermione) for integration testing.

Because hermione is based on WebdriverIO, you need to set up Selenium before proceeding further.

The simplest way to get started is to use one of the NPM selenium standalone packages, such as [vvo/selenium-standalone](https://github.com/webdriverio/selenium-standalone).

```
npm install selenium-standalone -g
```

After installing it (globally), you can install drivers and run your server by command

```
selenium-standalone install && selenium-standalone start
```

If you get error like `No Java runtime present, requesting install.` you should install [Java Development Kit (JDK)](https://www.oracle.com/technetwork/java/javase/downloads/index.html) for your OS.

Install **Hermione** and **Mocha** packages (already included in our package.json):

```
npm install
```

Run tests:

```
npm test
```

To run gui for screenshot tests use command:

```
npx hermione gui 
```