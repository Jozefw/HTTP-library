const posts = [
    {title: "post One", body: "Rando stuff that goes on and on"},
    {title: "post Two", body: "Yet more rando stuff that goes on and on"}
]

// ******* no promise ********
// function createPost(post, cb){
//     setTimeout(function(){
//         posts.push(post);
//         cb();
//     },2000)
// }

// ******* ES6 Promise **********
function createPost(post){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject("Something went horribly awry");
            }
        },2000)

    })
}

function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output = output + `<li>${post.title}</li>`;
            console.log(typeof output);
         });
         document.querySelector('ul').innerHTML = output;
        
    },1000)
}

createPost({title: 'Post Three',body:"OMG,here it comes again"}).then(getPosts)
.catch(function(error){
    console.log(error);
})