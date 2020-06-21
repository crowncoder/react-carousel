pipeline {
    agent any
    tools {nodejs "MyNodeJS"}
    stages {
         stage("Clone") {
            steps {
                checkout scm
            }
        }
        stage('Install') {
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