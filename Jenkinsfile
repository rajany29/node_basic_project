pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-nodejs-app"
        CONTAINER_NAME = "nodejs-container"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo/nodejs-app.git'  // Change to your repo
            }
        }

        stage('Build Docker Image') {
            steps {
                sh '''
                    docker build -t $IMAGE_NAME .
                '''
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                    docker stop $CONTAINER_NAME || true
                    docker rm $CONTAINER_NAME || true
                    docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "Node.js app is running at http://localhost:3000"
        }
        failure {
            echo "Build failed!"
        }
    }
}
