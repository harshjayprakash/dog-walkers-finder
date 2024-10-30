![Banner](banner.png)

# Waqq.ly - A dog walker service

> A prototype web application providing a service for dog owners to find dog walkers within their local area.

This code was submitted as part of an summative assignment.

- Submitted: May 2024
- Module: BS3928 Cloud Computing and Infrastructure
- Course: BSc (Hons) Computer Science

This web application is written in Angular 17.3 (with non-standalone components) in a serverless manner, making use of AWS Amplify API to access AWS Services used within this application (DynamoDB through Lambda through API Gateway; Cognito).

## Functionality

- Ability to create an account, register as a dog walker.
- Ability to add dogs to your account.
- Ability to search for dog walkers in your local area (based on the postalcode provided, and distance provided)
- Ability to edit account information and dog information.

Please note that the postalcode should not have any spaces.

## Deployment

- Requires Node Version 18.13
- Requires TypeScript Version 5.2 to 5.4
- Requires RxJS Version 6.5.3
- Correctly configured AWS IAM Roles

To deploy the application

1. Use `amplify configure` to setup your AWS profile configuration.
1. Delete `team-provider-info.json` from the amplify directory.
1. Run `amplify init` specifying your AWS profile.
1. Use `amplify push` to upload the stack to your AWS account.

This process has not be tested.

## Local Deployment

To run the application, locally download all the packages using `npm install` and `amplify init`, then to start running the application run `ng serve --open`, which will open your default web browser at `localhost:4200`.

## Limitations and Known Issues

- You must be logged in to access the 'Manage Dogs' page.
- The 'Find Walkers' page will not function unless you are logged in and provided a valid postalcode on your account.
- Logging in Reload Problem: To log in click the person icon. Once logged in click the reload button. Then click the account "person" icon.
