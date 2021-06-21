import { Component } from "react"
import axios from 'axios';

class LoginForm extends Component {
    state={
        information:{
            username:"",
            password:""
        }
    }



    logP = async (event)=>{
       const data=this.state.information
       event.preventDefault()
      
       try{
           await axios.post("http://127.0.0.1:8000/api/",data
       ).then(
           response=>{
               console.log(response.data)
           }
       );
        }
        catch(e) {
            console.log(e)
        }

   }

    HandleChange =(event)=>{
      const cred=this.state.information
      cred[event.target.name]=event.target.value
        
        this.setState (
      
        {information:cred}
            
            
        )
    }

    details = () =>
   


    {
        return(
            console.log(this.state.information)
        )
    }
    render(){
        return(
            <div>
            <form>

            <input type="text" name="username" placeholder="Username"  value={this.state.information.username} onChange={this.HandleChange} />
             <input type="password" name="password" placeholder="password" value={this.state.information.password} onChange={this.HandleChange} />
             <button type='submit' onClick={this.logP}>Login</button>


            </form>
            
          
             
            </div>

        )
    }
}
export default LoginForm;