import React from 'react';

const ContactForm = () => {
    const initial = {
        name: '',
        email: '',
        subject: '',
        department: '',
        message: ''
    }
    const [inputData, setInputData] = React.useState(initial);
    const [checked, setChecked] = React.useState(false);
    const handleInput = e => {
        setInputData({
            ...inputData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        if (checked) {
            e.preventDefault();
            //make submit form data
            console.log(inputData);
        }
    }
    const handleReset = () => {
        setInputData(initial);
    }
    return (
        <section id="ticket" className="exapath pb-80 noimage bg-seccolorstyle toppadding bottomhalfpadding">
            <div className="container">
                <div className="sec-main sec-up mb-0 sec-bg1 bg-seccolorstyle nomargin nopadding noshadow">
                    <div className="randomline hideelement">
                        <div className="bigline"></div>
                        <div className="smallline"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12 cd-filter-block mb-0">
                            <div className="form-contact cd-filter-content p-0 sec-bx">
                                <div className="text-center">
                                    <h2 className="section-heading mergecolor">Full out the Contact form to contact us</h2>
                                    <p className="mergecolor">We Will Help You To Choose The Best Plan!</p>
                                </div>
                                <form id="contactForm" method="POST" onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 position-relative">
                                            <label><i className="fas fa-user-tie"></i></label>
                                            <input
                                                onChange={handleInput}
                                                id="name"
                                                type="text"
                                                name="name"
                                                value={checked.name}
                                                placeholder="Full Name"
                                                required="" />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <label><i className="fas fa-envelope"></i></label>
                                            <input
                                                value={checked.email}
                                                onChange={handleInput}
                                                id="email"
                                                type="email"
                                                name="email"
                                                placeholder="Email Address"
                                                required=""
                                            />
                                        </div>
                                        <div className="col-md-6 position-relative mt-4">
                                            <label><i className="fas fa-file-alt"></i></label>
                                            <input

                                                value={checked.subject}
                                                onChange={handleInput}
                                                id="subject"
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                required="" />
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <div className="cd-select mt-4">
                                                <label className="db"></label>
                                                <select
                                                    value={checked.department}
                                                    onChange={handleInput}
                                                    id="department"
                                                    name="department"
                                                    className="select-filter"
                                                >
                                                    <option value="">Choose Department</option>
                                                    <option value="Support/Help Desk">Support/Help Desk</option>
                                                    <option value="Commercial Department">Commercial Department</option>
                                                    <option value="Sales Department">Sales Department</option>
                                                    <option value="Schedule Metings">Schedule Metings</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6 position-relative">
                                            <div className="form-group mt-4">
                                                <textarea onChange={handleInput} id="message" name="message" className="form-control" rows="5" placeholder="Message..."></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-6 position-relative mt-5">
                                            <input
                                                defaultChecked={false}
                                                required
                                                onChange={() => setChecked(!checked)}
                                                name="newsletter"
                                                type="checkbox"
                                                id="checkbox"
                                                className="filter"
                                            />

                                            <label htmlFor="checkbox" className="shake checkbox-label c-grey mb-4 seccolor"><span>I have read and accept the terms of the privacy policy - <a href="legal" className="golink">RGPD</a></span></label>


                                            <button type="submit" value="Submit" className="btn btn-default-yellow-fill float-start me-3">Submit Ticket</button>
                                            <button onCanPlay={handleReset} type="reset" value="reset" className="btn btn-default-fill mt-0 mb-3 me-3">Reset</button><br />
                                        </div>
                                        <div id="msgSubmit" className="col-md-12 mt-4">
                                            <h3 className="c-pink"> Message Submitted!</h3>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;