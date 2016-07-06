# ReFUEL4 SME Onboarding FrontEnd
Tracking issues with Github + [ZenHub](http://zenhub.io) - please download the browser plugin to view the [issue board](https://github.com/refuel4/sme-onboarding/issues#boards)

Based on WebPack + Angular.JS for SME onboarding front end
https://github.com/preboot/angular-webpack

# Installation
```
export SME_ENV=local, if you want to keep it then add it into your current user profile i.e ~/.bash_profile
- git clone git@github.com:refuel4/sme-onboarding.git
- cd sme-onboarding
- cp src/config/local.json.default src/config/local.json
- update the configuration in your local.json according to your need.
- npm install
- npm start
```

#Changing the ENV, HOST and PORT
There are three shell variables which you can configure via `export`.
 1. SME_ENV , (possible values are local, dev, stagin, prod). Example: export SME_ENV=local.
 2. SME_HOST, Example: export SME_HOST=go.refuel4.com. Default value of SME_HOST is `localhost`
 3. SME_PORT, Example: export SME_PORT=8282. Default value of SME_PORT is `8080`

Note: If you want these setting permanent for your terminal please add them in your user profile file i.e ~/.bash_profile.


#Testing Advertiser Cases:
- There are two possible options to do this.
- Option-1 Change the contents of api/adaccounts/index.html by (none/index.html) for No Advertiser Case and by (one/advertiser.html) for one advertiser case
- Option-2 Change the url in getAdAccounts of userService.js file. replace the url with adaccounts/none or adaccounts/none.
- Note: this will only have effect in SME_ENV=local in other environment these cases will work according to actual user's adccounts retrieved via API.

#Testing Credit Card Transactions
Use card number 4111111111111111, and any date in year = 2019, for example 02/19.

# Tests
- In another terminal, run `npm run test-watch` which starts karma tests in watch mode and autmatically re-runs tests when any `*.spec.js` file or source code file changes.

# Docs
- Run `npm run docs` to generate them into the
`docs/` folder, then `open docs/index.html` to view. 
