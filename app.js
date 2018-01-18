const http = new easyHTTP();

// ******* GET REQUEST ********

// http.get('https://jsonplaceholder.typicode.com/posts', function(err,posts){

//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });


// ******* create data for post ********

const data = {
  "title": "New Post - 'PUT' - ",
  "body": "Just new rando post info"
};

// ******* CREATE POST ********
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if(err){
//     console.log(err);
//   }else{
//     console.log(post);
//   }
  
// });

// ******* CREATE PUT ********




// ******* DELETE REQUEST ********

// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err,response){

//   if(err){
//     console.log(err);
//   }else{
//     console.log(response);
//   }
// });