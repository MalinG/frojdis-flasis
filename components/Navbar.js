import Link from 'next/link'
import { colors } from '../theme'

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
                margin-bottom: 24px;
                
            }

            li {
                margin-right: 15px;
            }

            a {
                color: ${colors.pink}
            }
        `}
        </style>
    </div>
)

export default Navbar