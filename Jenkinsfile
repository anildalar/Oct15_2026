pipeline{
	agent any
	tools{
		nodejs 'nodejs2460'
	}
	stages{
		stage("Basic Setup"){
			steps{
				sh '''
					apt update -y
					apt upgrade -y
					apt install sudo vim -y
				'''
			}
		}
		stage("Build"){
			tools{
				nodejs 'nodejsv22150'
			}
			steps{
	
				sh "node -v"
				sh "ls -al"
				sh "pwd"
				dir('myapp'){
					
					sh '''
					pwd
					npm install
					npm run build
					'''
				}
			}
		}
		stage("Test"){
			steps{
				sh 'pwd'
				dir('myapp'){
					sh 'pwd'
					sh 'npm run test'
				}
			}
		}
		stage("Build Docker Image and Push to Registry"){
			tools{
				nodejs 'nodev26120'
			}
			steps{
				withCredentials([usernamePassword(credentialsId: 'docker-hub-repo', passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                    			sh 'docker image build -t oklabs/myimage2 .'
                    			sh "echo $PASS | docker login -u $USER --password-stdin"
                    			sh 'docker image push oklabs/myimage2'
                		}
			}

		}
		stage("Hello3"){
			steps{
				sh 'node -v'
			}
		}
	}
	post{
		always{
			sh 'echo This is always execute';
			//deleteDir()
		}
	}

}
