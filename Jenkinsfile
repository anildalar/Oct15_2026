pipeline{
	agent any
	tools{
		nodejs 'nodejs2460'
	}
	stages{
		stage("Hello"){
			tools{
				nodejs 'nodejsv22150'
			}
			steps{
	
				sh "node -v"
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
			deleteDir()
		}
	}

}
