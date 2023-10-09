import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProvider";
import axios from "axios";


const useAdminSecure = () => {
    const {user, loading} =useContext(AuthContext);
    

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const res = await axios.get(`http://localhost:5000/user/admin?email=${user?.email}`);
            console.log(res);
                return res.data.admin;
        }
        
    })

    return [isAdmin, isAdminLoading];
};

export default useAdminSecure;