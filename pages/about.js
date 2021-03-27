import Link from 'next/link'

const About = () => {
    return (
        <div style={{ fontSize: '20px', color: 'tomato' }}>
            <h1>About</h1>
            <Link href='/'>
                <button>Home</button>
            </Link>
            <p>I was a magician once...</p>
        </div>
    )
};

export default About;