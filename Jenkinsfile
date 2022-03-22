pipeline {
    agent any

    stages {
        stage ('build') {
            steps {
                echo 'building our app...'
                sh 'npm install'
            }

        }
        stage ('test'){
            steps {
                echo 'testing our app...'
                sh 'npm test'
            }
        }
        stage ('deploy'){
            steps {
                echo 'not yet deploying our app'
            }
        }
    }
};