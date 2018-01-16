















// function easyHTTP(){
//   this.http = new XMLHttpRequest();
// }

// // get function
// easyHTTP.prototype.get = function(url,cb){
//   this.http.open('GET',url, true);

// // callback function occurs after the get request
//   let self = this;

//   this.http.onload = function(){
//    if (self.http.status === 200){
//      cb(null,self.http.responseText);
//    }else{
//     cb("Error : " + self.http.status)
//     }
//   }
//    this.http.send();
//   }
