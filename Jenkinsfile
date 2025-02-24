pipeline {
    agent any

    stages {
        stage('Build') {
            agent{
                docker {
                    image 'node:18-alpine'
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
