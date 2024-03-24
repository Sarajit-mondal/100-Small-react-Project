import { Form } from "react-router-dom";


const From = ({fromType}) => {


    const handalFromSubmit = (e)=>{
      e.preventDefault()

     const data =  fromType === 'logIn' ?
       {
        name : e.target.name.value,
        password:e.target.password.value
       }:
       {
        name : e.target.name.value,
        lastName:e.target.lastName.value,
        email:e.target.email.value,
        password:e.target.password.value,
        mael: `${e.target.mael ? "true":"flase"}`,
        femal:e.target.femal.value
       }

       console.log(data)

    }

    return (
        <div>
            {
               fromType === 'signUp' ?
            //    Sign up From
                <div className="flex items-center justify-center text-center">
                 <form  onSubmit={handalFromSubmit}>
                <h1>Sign Up</h1>
                <p>Please Sign Up our webSite</p>
                 <label >Name:
                    <input type="text" name="name" className=" border-2 px-5  py-2 ml-5 my-3" placeholder="Inter your name...." />
                  </label>
                  <br />
                 <label >Last Name:
                    <input type="text" name="lastName" className=" border-2 px-5  py-2 ml-5 my-3" placeholder="Inter your Last name...." />
                  </label>
                  <br />
                 <label >Email:
                    <input type="email" name="email" className=" border-2 px-5  py-2 ml-5 my-3" placeholder="Inter Email...." />
                  </label>
                  <br />
                 <label >password:
                    <input type="password" name="password" className=" border-2 px-5  py-2 ml-5 my-3" placeholder="Inter password...." />
                  </label>
                  <br />
                  <input type="radio" name="male" id="1" /> male
                  <input type="radio" name="femal" id="2" /> fimal
                   <br />
                  <input type="submit" value={fromType} className="p-2 bg-green-300 cursor-pointer" />
                 </form>
                
                </div>
                 : 
                //  log in from
                //  log in from
                 <div className="flex items-center justify-center text-center ">
                 <form onSubmit={handalFromSubmit}>
                  <h1>Log in</h1>
                  <p>Please Log in our webSite</p>
                  <label >Name:
                    <input type="text" name="name" className=" border-2 px-5  py-2 ml-5 my-3" placeholder="Inter your name...." />
                  </label>
                  <br/>
                  <label >Password:
                    <input type="password"name="password" className=" border-2 px-5  py-2 ml-5 my-3"  placeholder="Inter your password...." />
                  </label>
                 <br />
                  <input type="submit" value={fromType} className="p-2 bg-green-300 cursor-pointer" />
                  </form> 
                  
                 </div>
                
            }
        </div>
    );
};

export default From;