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
			sh 'This is always execute';
			deleteDir()
		}
	}

}
