import { useEffect, useState } from "react"

const useUsers = email =>{
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`https://medwin-cares-server-bayaziddeveloper-gmailcom.vercel.app/users/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsUser(data.isUser);
                setIsUserLoading(false);
            })
        }
    }, [email])
    return [isUser, setIsUserLoading]
 }

export default useUsers;