import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [movie , setMovie] = useState({
    data:null,
    isLoading:true,
    hasError:null
  });

  const getMovie = async ()=>{
    setMovie({
      ...movie,
      isLoading:true
    })

    const res = await fetch(url)
    const resJSON = await res.json();

    if(resJSON){
      setMovie({
        data:resJSON,
        isLoading:false,
        hasError:''
      });
    }
  };

  useEffect(()=>{
    getMovie()
    
  },[])



  return{
    products: movie.data,
    isLoading:movie.isLoading,
    hasError:movie.hasError
  }
  
}
