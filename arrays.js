let arr1=[3,7,34,90,12];

console.log(arr1.length);
console.log(arr1[4]);

let arr2 = [true, "green", "where",12,56];
console.log(arr2.length);
console.log(arr2[4]);

let myPets = ["Cow", "Bird", "Snake", "Dog"];
   let myPets2=myPets.toString();
   console.log(myPets2);

   let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
   let arrr=arr3.sort();
   console.log(arrr);


   var arr = ["apple", "mango", "apple",
            "orange", "mango", "mango"];

            function remove(arr){
                return arr.filter((item,index)=>arr.indexOf(item)===index)

            }
            console.log(remove(arr));

   var arr = ["apple", "mango", "apple",
   "orange", "mango", "mango"];

            

 let is =  ["apple", "mango", "apple",
           "orange", "mango", "mango"]

      
    let uniqueIs= [...new Set(is)];
    console.log(uniqueIs);




            let arr5 = ["the", "way", "x", 4];




          if (arr5=="way"){
              console.log("way");
            }
          else{
                 console.log("the search word was not found");
            }
            let word = "sevink";
            let word2=word.split('').join().sort('');
            console.log(word2);