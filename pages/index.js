import Link from 'next/link'

const Index = () => {
    return (
        <div style={{ fontSize: '20px', color: 'tomato' }}>
            <h1>SSR Magician</h1>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <Link href='/contact'>
                <button>Contact</button>
            </Link>
        </div>
    )
};

export default Index;