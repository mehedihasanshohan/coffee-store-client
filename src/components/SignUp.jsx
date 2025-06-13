import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";

const SignUp = () => {

  const { createUser } = useContext(AuthContext);
    console.log(createUser)

  const handleSignUp = e => {
     e.preventDefault();
     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log('form sign up', email, password);

     createUser(email, password)
      .then(result => {
        console.log(result.user);
        const newUser = {name, email}
        // SAVE NEW USER TO THE DATABASE
        fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'content-type' :  'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json())
          .then(data => {
            console.log('user created to db', data);
          })

      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="card bg-base-100 max-w-sm mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name="name" className="input" placeholder="Name" />
                    <label className="label">Address</label>
                    <input type="text" name="address" className="input" placeholder="Address" />
                    <label className="label">Phone</label>
                    <input type="text" name="phone" className="input" placeholder="Phone NUmber" />
                    <label className="label">photo</label>
                    <input type="text" name="photo" className="input" placeholder="Photo URL" />
                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Sign up</button>
                </form>
            </div>
        </div>
  )
}

export default SignUp