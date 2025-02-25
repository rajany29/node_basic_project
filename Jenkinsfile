pipeline {
    agent {
        docker {
            image 'node:18'
            args '-v /tmp/jenkins-workspace:/var/jenkins_home/workspace'  // Change the workspace path
        }
    }

    stages {
        stage('Build') {
            steps {
                sh '''
                    ls -la
                    npm --version
                    node --version
                    npm ci
                    node server.js &
                    sleep 5
                    ls -la
                '''
            }
        }
    }
}
