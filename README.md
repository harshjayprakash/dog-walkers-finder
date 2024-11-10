# Dog Walker Finder (Waqqly)

![Banner (Decorative)](./doc/dwf-banner.png)

## Overview

The "Dog Walker Finder" application for dog owners to find dog walkers within their local
area (distance specified). The scenario states that the this application will be created
by a small startup focused on using the cloud's scalable services. This is an assignment
from the module BS3928 Cloud Computing and Infrastructure at the University of Winchester.

## Original Requirements

## Deployment

```sh
# Setup your AWS Profile Configuration, if you haven't already.
amplify configure
# Initialise project with amplify, specifing your AWS Profile.
amplify init
# Upload the stack to your AWS Account
amplify publish
```

Please note that these deployment steps have not been validated for functionality and may
fail.

## Local Deployment

The application requires amplify to be setup with the functions, storage and
authentication for functionality.

```sh
# Install packages
npm install
# Initialise project with Amplify
amplify init
# Run application. This will open your default web browser on localhost:4200.
ng serve --open
```

## Usage


![Find Page](./doc/dwf-find.PNG)

## References

* Angular (under MIT): <https://github.com/angular/angular>
* Angular Material (under MIT): <https://github.com/angular/components>
* AWS Amplify Package (under Apache 2.0): <https://github.com/aws-amplify/amplify-js?tab=readme-ov-file>
* AWS Amplify Angular UI (under Apache 2.0): <https://github.com/aws-amplify/amplify-ui>
* AWS Amplify: <https://aws.amazon.com/amplify/>
* Angular: <https://angular.dev/>
