pipeline {
    agent any
    stages {
         stage("Clone") {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            tools {nodejs "MyNodeJS"}
            steps {
                sh 'npm ci'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}