# PHZ Questionnaire Form

Usage:
git archive --format=tar HEAD | tar x -C ~/workspace/docker/project-name

## 1. Project Description

Net promoter score (NPS) is a widely used market research metric that typically takes the form of a single survey question asking respondents to rate the likelihood that they would recommend a company, product, or a service to a friend or colleague. NPS score is measured between 0 and 10. The NPS assumes a subdivision of respondents into "promoters" who provide ratings of 9 or 10, "passives" who provide ratings of 7 or 8, and "detractors" who provide ratings of 6 or lower. In this project we created an embeddable questionnaire form for PHZ Full Stack to measure their companys NPS.

### 1.1. Business Vision

To create a simple and clear questionnaire form for PHZ employees.

### 1.2. Task Management

- Slack
- Teams
- Trello
- GitHub

### 1.3. Personas

- Chowdhury Mahady @mahadyC
- Avadhanula Sravanthi @AsravanthiR
- Jumppanen Noora @NooraJumppanen
- Kantanen Heikki @HeikkiKantanen

### 1.4. Use Cases

Link to the questionnaire form is sent to the employees once a month. In the questionnaire employees are asked a simple question "How likely are you to recommend PHZ Full Stack as an employer to a friend or colleague?". Then they have the option to choose a number between 0 and 10. 0 being "Extremely unlikely" and 10 being "Extremely likely". Users then also have an opportunity to add additional comments if they choose to. 

### 1.5. Non-Functional Requirements

https://wiki.phz.fi/NonFunctionalRequirements

## 2. Architecture

### 2.1. Technologies

Languages, frameworks and technologies used: 

- React
- JavaScript
- Material-UI
- Firebase / Firestore

Dev



CI

- GitHub Actions

Staging



Production

- Netlify

### 2.2. Naming, Terms and Key Concepts

Environments and the configs should be named as

- dev: docker-compose.yml (i.e. use the default names for dev env), but .env.dev
- (ci): use the dev -env on CI
- stg: docker-compose.stg.yml, .env.stg
- prod: docker-compose.prod.yml, .env.prod

### 2.3. Coding Convention

Directory structure

- doc/ for UML documents
- etc/ for nginx, ssh etc configs. Can be cp -pr etc/ /etc to the virtual machine during provisioning and matches the os directory structure
- results/ test results
- reports/ for e.g. code coverage reports
- src/ for source code
  \*\* Note! Source code should be placed under a single folder (src) that can be mounted over Docker -volume or Vagrant -shared folder inside the virtual machine so that node_modules or vendor directory are not on the shared folder. See https://wiki.phz.fi/Docker and https://wiki.phz.fi/Vagrant for further details how to circumvent the problems.
- tests/ for tests

### 2.4. Development Guide

Add here examples and hints of good ways how to code the project. Convert the silent knowledge as tacit knowledge here.

- See https://en.wikipedia.org/wiki/Knowledge_management

## 3. Development Environment

### 3.1. Prerequisites

### 3.2. Start the Application

-  I. Pull or clone the newest code from GitHub.
-  II. npm install
-  III. npm start 

### 3.3. Access the Application

### 3.4. Run Tests

#### 3.4.1.Backstopjs visual regression test

Global installation (recommended)

$ npm install -g backstopjs

Initializing your project

$ backstop init

Generating test bitmaps

$ backstop test

Approving changes

$ backstop approve

#### 3.4.2 Cypress testing

JavaScript testing automation solution (end-to-end testing framework) for used for web automation create web test automation scripts.

setting up tests:

Install cypress in the root folder.

npm install cypress --save-dev

Create a folder in integration folder and create a file to write the test scripts.

To run the tests:

npx cypress open

Takes screen shots of the tests running and saves in the folder automatically.

### 3.5. IDE Setup and Debugging

### 3.6. Version Control

### 3.7. Databases and Migrations

### 3.8. Continuous Integration

## 4. Staging Environment

### 4.1. Access

### 4.2. Deployment

### 4.3. Smoke Tests

#### 4.3.1. Automated Test Cases

#### 4.3.2. Manual Test Cases

### 4.4. Rollback

### 4.5. Logs

### 4.6. Monitoring

## 5. Production Environment

### 5.1. Access

### 5.2. Deployment

### 5.3. Smoke Tests

#### 5.3.1. Automated Test Cases

#### 5.3.2. Manual Test Cases

### 5.4. Rollback

### 5.5. Logs

### 5.6. Monitoring

## 6. Operating Manual

### 6.1 Scheduled Jobs

### 6.2 Manual Processes

## 7. Problems

### 7.1. Environments

### 7.2. Coding

### 7.3. Dependencies

Add here TODO and blockers that you have found related to upgrading to newer versions.
List the library/framework/service, version, and then the error message.
