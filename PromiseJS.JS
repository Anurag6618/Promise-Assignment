const posts=[{title:'Post One',body:'This is Post one'},
{title:'Post Two',body:'This is Post Two'},
{title:'Post Three',body:'This is Post Three'}];

function getposts(){
    setTimeout(()=>{
        let output="";
        posts.forEach((post)=>{
            output=output+`<li>${post.title}</li>`
        })

        document.body.innerHTML=output;

    },1000);
}

 function createPost(post){
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             posts.push(post);
             const error=false;
             if (!error){
                 resolve();
             } else{
                 reject('error');
             }
         },2000);
     });

 }

 createPost({title:'Post Three',body:'This is Post Three'}).then(getposts);

function deletepost(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            
            i=posts.length;
            
            while (i>0){
                console.log(i)
                posts.pop();
                i--
            }

            console.log(posts)
            const error=true
            if(!error){
                resolve();
            }else{
                reject('error: Array is empty')
            }
        },2000)
    })
}

deletepost().catch(err=>{console.log(err)})

function createpost2(){
    return new Promise(()=>{

    })
}

const user={username:"Anurag",lastactivity:'8th July'}

updatelastactivitytime={
    return new Promise((resolve,reject)={
        setTimeout(() => {
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000);
    })
}

updatespost(){
    Promise.all([createpost2,updatelastactivitytime])
    .then(([createpostvalue,updatelastactivitytimevalue])=>{
        console.log(updatelastactivitytimevalue)
    })
    .catch(err=>console.log(err)
)
}