import React from "react";
import"./register.css"

const Register=()=>{
  

    return(


<div class="bg-black flex justify-center items-center min-h-screen">
    <div class="bg-gray-600 rounded-lg p-4 shadow-2xl max-w-lg w-full h">
    <div class="text-center text-3xl text-yellow-300 mb-12 font-bold">Register</div>
    <form>
        <div>
        <label
            type="email"
         
            class="block text-sm font-medium text-gray-200 mb-2"
            >Email</label>
             <input
            type="email"
            placeholder="Email"
            name="email"
            id=""
            class="px-3 py-2 w-full bg-gray-800 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-300" />
        </div>
        <div class="mb-8">
          <label
            for="password"
            class="block text-sm font-medium text-gray-200 mb-2"
            >password</label>
             <input
            type="password"
            placeholder="password"
            name="email"
            id=""
            class="px-3 py-2 w-full bg-gray-800 border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        </div>
        <div class="flex justify-center items-center">
        <button 
        
          type="submit"
          class="w-60 bg-yellow-300 text-black rounded-md py-3 hover:bg-yellow-500 shadow-2xl cursor-pointer flex justify-center items-center"
        
        > 
        
          Register
        </button>
        </div>
    </form>
  
    </div>
   
</div>


    )
}
export default Register;