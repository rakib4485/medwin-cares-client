import { useEffect, useState } from "react";

const useReception = email => {
    const [isReception, setIsReception] = useState(false);
    const [isReceptionLoading, setIsReceptionLoading] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`http://localhost:5000/users/reception/${email}`)
            .then(res =>  res.json())
            .then(data =>{
                console.log(data);
                setIsReception(data.isReception);
                setIsReceptionLoading(false);
            })
        }
    }, [email])
    return [isReception, isReceptionLoading]

}

export default useReception;