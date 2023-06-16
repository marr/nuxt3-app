pipeline {
    agent {
        docker {
            image 'node:lts-hydrogen'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        // stage('Test') {
        //   steps {
        //     sh 'npm test'
        //   }
        // }
    }
}