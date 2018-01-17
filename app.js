const http = new easyHTTP();


// http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts){

//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });


// create data for post

const data = {
  "title": "New Post",
  "body": "Just new rando post info"
};

http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
    if(err){
      console.log(err);
    }else{
      console.log(post);
    }
  
});