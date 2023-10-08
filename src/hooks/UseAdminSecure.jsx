// import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../components/providers/AuthProvider";


// const useAdminSecure = () => {
//     const {user, loader} =useContext(AuthContext);
    

//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey:['isAdmin', user?.email],
//         enabled: !loader,
//         queryFn: async () =>{
//             const res = await get(`http://localhost:3000/user/admin/${user?.email}`);
//                 return res.data.admin;
//         }
        
//     })

//     return [isAdmin, isAdminLoading];
// };

// export default useAdminSecure;