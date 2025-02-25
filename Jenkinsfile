pipeline {
    agent any

    environment {
        IMAGE_NAME = "my-nodejs-app"
        CONTAINER_NAME = "nodejs-container"
    }

    stages {
        

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
                    docker run -d --name $CONTAINER_NAME -p 5000:5000 $IMAGE_NAME
                '''
            }
        }
    }

    post {
        success {
            echo "Node.js app is running at http://localhost:5000"
        }
        failure {
            echo "Build failed!"
        }
    }
}
