function Contact() {
	return (
        <div>
            <h1>Contact</h1>
            <form>
                <input type='text' placeholder='Name' />
                <input type='text' placeholder='Email' />
                <input type='text' placeholder='Subject' />
                <textarea placeholder='Message' />
                <button>Submit</button>
            </form>
        </div>
	);
};

export default Contact;
