import Link from 'next/link'

const Navbar = () => (
    <div>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/timer"><a>Timer</a></Link></li>
            <li><Link href="/create-workout"><a>Create workout</a></Link></li>
        </ul>
        <style jsx>{`
            ul {
                display: flex;
                list-style: none;
            }

            li {
                margin-right: 15px;
            }
        `}
        </style>
    </div>
)

export default Navbar