/*Author: 	Mathapelo Motloung
 *Date: 	26/11/2018
 *Description: Oject Oriented Programming Assignment
*/


//Create a person class
class Person {
  
  //Create constructor method to initialise objects
  constructor(name,surname,age,gender,interest) {
   	
   	this.firstName=name;
	this.secondName=surname;
	this.age=age;
	this.gender=gender;
	this.fullname= name+" "+ surname; 
	this.greeting="Hello my name is " +name;
	this.hobby=interest;

	}
} 
//Create an object and intantiate the Person class
var firstPerson= new Person("Cairo","Peters",17,"female","singing,dancing")
console.log(firstPerson);

//Create a second  object and intantiate the Person class
var secondPerson= new Person("Botshelo","Masilo",69,"Male","singing and gaming");
console.log(secondPerson);


secondPerson.method="I am " +secondPerson.fullname+ ", I am " +secondPerson.age 
+" years old and my interests are " + secondPerson.hobby+".";