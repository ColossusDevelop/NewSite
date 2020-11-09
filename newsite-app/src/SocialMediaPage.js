import React, { Component } from 'react';

class SocialMediaPage extends Component {
    render() {
        return(
            <div>
                <h1>Social Media</h1>
                <textarea className="socialMediaInput" spellCheck="true"></textarea>
                <br />
                <button className="socialMediaPostButton">Post</button>
            </div>
        )
    }
}
export default SocialMediaPage;