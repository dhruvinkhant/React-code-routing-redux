import React from 'react';

function About(props) {
    return (
        <div className='view-container'>
            {/* Title and image  */}
            <h1 className='about-title'>About Us</h1>
            <div className='title-img'>
                <img src="https://thumbs.dreamstime.com/b/horizontal-banner-hands-typing-laptop-keyboard-various-electronic-devices-symbols-programming-software-horizontal-125917922.jpg" alt="" />
                <p>Technically, one copyright notice/footer is sufficient to gain the extra legal protections that a copyright footer provides. But some website owners put their copyright footer on every page and on every article or video or photographs uploaded. Some use a more expansive copyright statement like “all rights reserved with respect to all content including text, product descriptions, photographs, audio content and videos.” Websites run by professional photographers are an example where a more expansive rights statement can be useful. In any event, there is no “set” way to write or use a copyright footer, so website owners can make the choices that best fit their needs<br>
                </br>
                    Note that a website owner can also signal that some content is being made available for use via possible creative common licenses. See here for discussion of the various types. If this is the intent, then instead of a “no-use” rights statement like “All rights reserved,” the rights statement might say “Some rights reserved; contact owner for more information.” If you have questions about protecting your copyrights and other intellectual property, contact the copyright lawyers at Revision Legal at 231-714-0100.</p>
            </div>

            {/* <div className='about-details'>
                <div className='about-line'>
                
                    </div>
            </div> */}

            {/* <div className='details'>
                <div className='tags'>
                    <h2>Address :- 1002, New your city</h2>
                    <h2>Email :- dhruvin@gmail.com</h2>
                    <h2>Contact :- +1231234565</h2>
                </div>
            </div> */}

        </div>
    );
}

export default About;