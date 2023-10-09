export const saveUser=user=>{
    const currentUser={
        email:user.email,
    }

    fetch(`https://demo-theta-sepia.vercel.app/user/${user?.email}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json",
        },
        body:JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}