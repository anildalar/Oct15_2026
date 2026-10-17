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
		stage("Hello2"){
			tools{
				nodejs 'nodev26120'
			}
			steps{
				sh 'echo Hello ANil How are'
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
