export const sayHello = () =>{ //action creator
   
   return {
        type:"SAY_HELLO",
        payload:"Hi and Welcome to my App" //action {type:"",payload:""}
    }

}

export const sayGoodbye = () =>{ //action creator
   
    return {
         type:"SAY_GOODBYE",
         payload:"Hi and Get out of my App" //action {type:"",payload:""}
     }
 
 }