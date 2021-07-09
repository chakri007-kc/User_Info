import React, { Component } from 'react'
import axios from 'axios'
export default class Signup extends Component{

    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state={
            username:'',
            des:''
        }

    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value})
    }

    onSubmit(e){
        e.preventDefault();

        const user = {
          username: this.state.username,
          des: this.state.des
        }
    
        console.log(user);
        axios.post('http://localhost:4000/users/add',user)
        .then(res => console.log(res.data));

        window.location = '/';
    }



    render(){
        return(
            <div>
                <p>signup</p>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            name="username"
                            value={this.state.username}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Blog: </label>
                        <input type="text"
                            required
                            className="form-control"
                            name="des"
                            value={this.state.des}
                            onChange={this.onChange}
                        />
                    </div>

                    <div className="form-group">
                            <input type="submit" value="Post"  className="btn btn-primary" />
                    </div>

                </form>
            </div>
        )
    }
}