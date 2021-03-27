import Link from 'next/link'

const Contact = () => {
    return (
        <div style={{ fontSize: '20px', color: 'tomato' }}>
            <h1>Contact</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <p>Let's talk...</p>
        </div>
    )
};

export default Contact;