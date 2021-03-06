# Simple Web app LIbrary for University Documents
PROJECT TASK (CLOUD PART)
* Complete a docker file to containerize the application
* Deploy the containerzed application using docker
* Configure Kubernetes and configure kubernetes cluster
* Uploading the complete sample to github repo with circleci to indicate the code has been tested.

INSTALLATION.
To be able to run the application on Windows OS we can use the Docker Desktop application which comes with Kubernetes version.
[Kubernetes on docker](https://docs.docker.com/desktop/kubernetes/)

We also need AWS eksctl and kubectl. Eksctl is used for creating clusters. Simplify's the whole process frommcreating VPC,kuberenetes API endpoint,subnets and node groups.
## ekstcl installation
```# Install Chocolatey. Refer to the https://chocolatey.org/install  for detailed steps
Set-ExecutionPolicy AllSigned 
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
# Exit and re-run Powershell as an Admin
chocolatey install eksctl
# Verify
choco -?
```
kubectl helps to deploy applications and communicate with Kubernetes cluster.
```
# Make sure Docker Desktop is running
kubectl version --client
```
Ensure you have AWS account active,
1. Create an EKS Cluster utility
* Creating Kuberenetes cluster in AWS Cluster
```
eksctl create cluster --name eksctl-demo --region=us-west-2 
```
2. View Details
* For viewing on the AWS,we navigate to the console and check on the cloud formation stack
```
eksctl utils describe-stacks --region=us-west-2 --cluster=eksctl-demo
```
* Checking on health state of nodes
```kubectl get nodes 
```
4. Deploy the Sample App to Kubernetes Cluster
```# Assuming you have already cloned the course repo as
git clone https://github.com/samkb420/Cloud-Example-Deployment.git
# Move to the exercise folder if you want to write Dockerfile from scratch
cd Cloud-Example-Deployment
```
* docker login
* Running run docker.sh script to build an image and run in locally
* Next is tagging and pushing the image 
```docker tag sample elsiedev/dscsample
docker push elsiedev/dscsample
```
 Once docker image is locally available,we deploy to kubernetes cluster
 ```
 # Assuming the Kubernetes cluster is ready
kubectl get nodes
# Deploy an App from the Dockerhub to the Kubernetes Cluster
kubectl create deploy sample --image=elsiedev/dscsample
# See the status
kubectl get deploy,rs,svc,pods
# Port forward 
 kubectl port-forward pod/dscsample-5cfddb8d9d-lfzcg --address 0.0.0.0 8080:8080 dscsample
```
Accessing the app locally. 

5. Deleting the cluster to avoid recurring charges.
Delete from the cloud formation web console or using the utility command 
```eksctl delete cluster --region=us-west-2 --name=eksctl-demo
```
