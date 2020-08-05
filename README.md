# Cypress-react-realworld-automation
automated framework with Cypress and Page object pattern on the page:

https://react-redux.realworld.io/

it is a little smoke test and visual AI with

 https://applitools.com/

the page object patter applied here is just one of a bunch of ways that it can be applied, and for that reason is not conscious, as you will be able to see on the cypress/integration/pageObject/*.js sometimes just the element is returned, other ones the element with the action already executed, 

as well some good practices, is not the same have a method called yourFeed, than some methods like getArticles or clickFavoritedArticles where you know that you action will receive.

some custom commands on the cypress/support/commands.js for the login for example to call cy.Login() instead of place all that logic on the test, this became a custom command.

for the reporter it was implemented mochawesome, on the package.json you can see already some scripts to run all the test and get the reports

and lastly use applitools, it is a good visual AI tool for UI, it saves a lot of time,you will need and API, thus need to create an account:

https://auth.applitools.com/users/register

https://applitools.com/tutorials/cypress.html

after you follow the steps you need to place you API  on the file applitools.config.js 

apiKey: '',

that's all to have this framework working, don't worry about the mail and pass it is fake so it does matter at all.

For sure this framework can be improved in many ways, and even more with a better semantic HTML a good practices like having unique identifiers for the elements, yet that out my scope, so I tried to test most of the working functionality of this page. 

I hope you find it usefull.
