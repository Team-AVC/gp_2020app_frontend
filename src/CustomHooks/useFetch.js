// import { useEffect, useState } from "react";

// export const useFetch = (url) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [data, setData] = useState("");

//   const async getData=()=>{
//       const response=await fetch(url);
//       const reponsedata =await response.json();

//       setIsLoading(false);
//       setData(reponsedata);
//   }

//   useEffect(()=>{
//       getData();
//   },[url]);

//   return {
//     isLoading,
//     data,
//   };
// };
