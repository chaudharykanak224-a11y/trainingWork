const person = {
    first_name: "sam",
    last_name: "san",
     
    Greet : function(){
        console.log("hlo, i am " + this.first_name + "" + this.last_name);

    }
};
  console.log (person . first_name);
  console.log (person . last_name);
person . Greet();