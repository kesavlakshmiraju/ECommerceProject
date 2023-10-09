import React, { Component } from 'react'
import { auth, createUserProfileDocument } from '../firebase/Firebase'

export default class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: '',
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        const { name, email, password, repassword } = this.state;
        if (password !== repassword) {
            alert('Both password and re entered password must be same')
            this.setState({ repassword: '' })
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { name })
            this.setState
                ({
                    name: '',
                    email: '',
                    password: '',
                    repassword: '',
                })
        }
        catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div className='border-2 p-7'>
                <h2 className='text-2xl mb-2'>I do not have an account</h2>
                <p className=' text-sm mb-2'>Sign up with your email and password</p>
                <form onSubmit={this.handleSubmit} className=' flex flex-col space-y-2 w-96 '>
                    <label>Display Name</label>
                    <input className=' border'
                        name='name'
                        type='text'
                        value={this.state.name}
                        required
                        onChange={e => this.setState({ name: e.target.value })}
                    />
                    <label className=''>Email</label>
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
                    <label className=''>Confirm Password</label>
                    <input className=' border'
                        name='repassword'
                        type='password'
                        value={this.state.repassword}
                        required
                        onChange={e => this.setState({ repassword: e.target.value })}
                    />
                    <div className=' flex justify-center'>
                        <button className='w-28 text-sm pt-1 pb-1 border-2  text-white bg-black  hover:text-black  hover:bg-white'>SIGN UP</button>
                    </div>
                </form>
            </div>
        )
    }
}
