# React Router Dom v6 Nested Route Params Issue

This repository demonstrates a bug encountered when using nested routes with parameters in React Router Dom v6.  Routes with parameters defined inside a parent route do not match correctly, leading to unexpected behavior.  The solution demonstrates a corrected approach to handle this scenario.

## Bug Description
Nested routes with parameters within a parent route are not being matched as expected. The issue is that the nested route's path is interpreted relative to the parent route, which leads to unexpected behavior when trying to access nested routes with parameters.

## Solution
The solution involves updating the path names to be more explicit and ensure the parent route matches the whole path up to the parameter. The paths should not overlap.

## Setup
1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.