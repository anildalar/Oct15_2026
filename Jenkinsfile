pipeline{
	agent any
	stages{
		stage("Hello"){
			steps{
	
				sh "node -v"
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
