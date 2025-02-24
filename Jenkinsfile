pipeline {
    agent any

    stages {
        stage('Build') {
            agent{
                docker {
                    image 'node:18'
                }
            }
            steps {
                sh '''
                    ls -la
                    npm -version
                    node -version
                    npm ci
                    node server.js
                    ls -la
                '''
            }
        }
    }
}
