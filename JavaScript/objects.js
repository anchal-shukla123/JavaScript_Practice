//objects using literals
 student={
    name:"anchal",
    age:19,
    course: "btech",
    printCount : function(){
       console.log("hello world")
    }
 }
 console.log(student);
 console.log(student.name);
 console.log(student["course"]);// right way of accessing the values in object
 Object.freeze(student);        // no channge in the object
 student["name"]="akshat";
 console.log(student);
  console.log(student.printCount);
  console.log(student.printCount());

  //********* combining two or more objets ************

  obj1={
    1:"a",
    2:"b"
  }
  obj2={
    3:"c",
    4:"d"
  }
 
  //1. using assign method
  obj3=Object.assign({}, obj1, obj2);

  //2. using spread
  obj4={ ...obj1, ...obj2};

  console.log(obj3);
  console.log(obj4);
  