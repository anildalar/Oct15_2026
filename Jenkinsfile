pipeline{
	agent any
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
