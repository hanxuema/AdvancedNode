 const print = (stars, header) =>{
     console.log("*");
     console.log(header);
     console.log("*");
 }

 if (require.main === module) {
     //running as a script
     print(process.argv[2], process.argv[3]);
 }
 else {
     //being required
     module.exports = print;
 }