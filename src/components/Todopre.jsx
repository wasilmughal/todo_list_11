import React from "react";

import { BsPersonAdd } from 'react-icons/bs';
import { IoIosConstruct } from 'react-icons/io';

import { AiOutlineDelete } from 'react-icons/ai';

class Todopre extends React.Component{
    constructor(){
        super()

        this.state={
             inp:""
             ,
             arr:[

             ],

             a:0
        }
    }



add = _=>{

    this.state.arr=[...this.state.arr, this.state.inp]
    this.setState({

    })
    console.log(this.state.arr)
}


del=(ind)=>{

let a= this.state.arr.splice(ind,1)


this.setState({
})


}



edit=(ind)=>{
this.state.a=1

// this.state.arr.splice(ind)

this.setState({

})

}



render(){
  return(
<>

<input type="text" onChange={(e)=>(this.setState({inp:e.target.value}))} />


<button onClick={()=>this.add()} ><BsPersonAdd/></button>


{
    this.state.arr.map((v,i)=>{
       return (
        

     
       
       
        <li ><span onClick={()=>this.edit(i)} ><IoIosConstruct/></span><i onClick={()=>this.del(i)}><AiOutlineDelete/> </i> {v}</li>
      

      
       )

    })
}


</>







  )
}



}

export default Todopre