# New Driver Mile Tracker Application

#	The goal of the New Driver Mile Tracker Application is to provide young, unlicensed drivers with a way to keep track of the supervised miles they drive by using manual entry, and geo tracking to log and calculate the number of hours they have driven.  

#	The app should also provide a way to upload images of the odometer both before and after driving supervised miles.  


#	In addition to keeping track of miles for the driver, the app should provide a way to verify that the young driver is registered to drive under supervision, provide a way for the supervising driver to upload an image of their license and show that they are legal guardians or legally authorized by the guardians to supervise their young driver.   Or the app should communicate through an API with the DMV to acquire these verifications.

#	Lastly the app should provide a way to print out all of the forms as well as a final summery for each new drivers’ hours driven, their legal information, and the supervising drivers signature, both digital and handwritten.  The end goal is to get the application to a place where all the above can be done through the application digitally. 

## App Needs & Requirements:
	User Verification
	Geo Tracker Mile Entry
	Password Encryption
	Display User Miles
	Calculate Miles Driven
	*Share User Miles
  Store Images
	Allow Digital Signature
	User Registration Form
	User Sign In Form
	User Miles Driven Form
	Ability To Print Out All Forms
	Licensed Driver Confirmation & Verification
	*Possibly Communicate Via API With DMV
	Application Timer 
	
## As a user I need to:
	Register
	Log In
	Manual Mile Entry
	Upload Images
  Odometer Image Before Driving
	Odometer Image After Driving

### Databases & Storage:

#### Users 1:
	User Id
	First Name
	Last Name
	Address
	Phone Number
	Miles Driven

#### Info 2:
	User Id
	Username
	Password

#### Security 3:

	User Id
	Password

#### Images 4:
	UserId
	Image

##### Bring Angular Material Into The Project
  npm install --save @angular/material @angular/cdk @angular/animations
  ng add @angular/material

##### Add some components

ng add component components/UserRegistration
ng add component components/UserLogin
ng add component components/UserProfile
ng add component components/UserSummary

##### Add some services

ng generate service components/services/UserService
ng generate service components/services/MileService
ng generate service components/services/ImageService
ng generate service components/services/AuthenticationService

##### Add some interceptors

ng generate interceptor components/interceptors/Auth
ng generate interceptor components/interceptors/Error
ng generate interceptor components/interceptors/Message

##### Add some guards

ng generate guard components/guards/Authorize
ng generate guard components/guards/Message

##### Add a couple modules

ng g module components/modules/Material
ng g module components/modules/Users

# Install bootstrap
npm install bootstrap --save


