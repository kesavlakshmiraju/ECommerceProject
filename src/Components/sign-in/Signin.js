import React, { Component } from 'react'
import { signInWithGoogle  } from '../firebase/Firebase'
import { auth } from '../firebase/Firebase'

export default class Signin extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { email , password } = this.state 
        try{
            await auth.signInWithEmailAndPassword( email , password )
        }
        catch(error)
        {
            console.log(error.message);
        }
        this.setState({ email: '', password: '' })
    }

    render() {
        return (
            <div className='border-2 p-7'>
                <div>
                    <h2 className='text-2xl mb-2'>I already have an account</h2>
                    <p className=' text-sm mb-2'>Sign in with your email and password</p>

                    <form onSubmit={this.handleSubmit} className=' flex flex-col space-y-2 w-96 '>
                        <label>Email</label>
                        <input className=' border'
                            name='email'
                            type='email'
                            value={this.state.email}
                            required
                            onChange={e => this.setState({ email: e.target.value })}
                        />
                        <label className=''>Password</label>
                        <input className=' border'
                            name='password'
                            type='password'
                            value={this.state.password}
                            required
                            onChange={e => this.setState({ password: e.target.value })}
                        />
                        <div className='flex justify-between'>
                            <button className='w-28 text-sm pt-1 pb-1 border-2 text-white bg-black hover:bg-white hover:text-black'>
                                SIGN IN
                                </button>
                            <button className='p-2 text-sm pt-1 pb-1 border-2 text-white bg-black hover:text-black  hover:bg-white' onClick={ signInWithGoogle }>
                                SIGN IN WITH GOOGLE
                                </button>
                        </div>
                    </form>
                </div>

            </div>
        )
    }
}
