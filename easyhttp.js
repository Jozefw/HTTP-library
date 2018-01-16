function easyHTTP(){
  this.http = new XMLHttpRequest();
}

// get request

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

