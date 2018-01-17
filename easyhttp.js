function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// ******* get request **********

easyHTTP.prototype.get = function(url, cb) {
  this.http.open('GET',url,true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      cb(null,self.http.responseText);
      
    }else{
      cb('Error :' + self.http.status)
    }
  }
  this.http.send();
}
  
  // ******* POST request **********
  
  easyHTTP.prototype.post = function(url, data,cb){
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this;
    this.http.onload = function(){
      cb(null,self.http.responseText);
    }
    
    this.http.send(JSON.stringify(data));
  }
  
  
  // ******* PUT request **********


  easyHTTP.prototype.put = function(url, data,cb){
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type','application/json');
    
    let self = this;
    this.http.onload = function(){
      cb(null,self.http.responseText);
    }
    
    this.http.send(JSON.stringify(data));
  }