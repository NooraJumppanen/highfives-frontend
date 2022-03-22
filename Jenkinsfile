pipeline {
    agent any

    tools {nodejs "node"}

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
                echo 'deploying our app...'
                sh 'npm start'
            }
        }
    }
};