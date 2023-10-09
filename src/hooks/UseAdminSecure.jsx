import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import axios from "axios";


const useAdminSecure = () => {
    const {user, loading} =useContext(AuthContext);
    
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await fetch(`https://demo-theta-sepia.vercel.app/user/admin?email=${user?.email}`);
                return res.json();
        }
        
    })

    return [isAdmin, isAdminLoading];
    // useEffect(()=>{
    //     fetch(`https://demo-theta-sepia.vercel.app/user/admin?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //     })
    // },[user])
};

export default useAdminSecure;