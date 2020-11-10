import React, { Component, Button } from 'react';

class SocialMediaPosts extends Component {
    constructor(props){
        super(props);
        this.state = { details: '' }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getPost() {
        const { details } = this.state;
        const postObject = {
            details: details
        }
        const newPost = posts;

        newPost.push(postObject);

        this.setState({
            details: ""
        });
    }

    generateSocialMediaPost() {
        return(
            <button className='submitText' type='submit' value='Submit' onClick={() => this.getPost()}>
                Submit
            </button>
        )
    }

    handleChange(event) {
        this.setState({ textFieldValue: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.getPost(this.state.textFieldValue);
        this.setState({ textFieldValue: '' });

    }

    

    
         
    
    render(){
        return(
            <div>
                <div>
                <form onSubmit={this.handleSubmit}>
                        <input className='textBox' type='text' value={this.state.textFieldValue} onChange={this.handleChange} />
                    </form>
                </div>
                <div>
                    {this.generateSocialMediaPost()}
                </div>
            </div>
        )
    }
    
}

export default SocialMediaPosts;