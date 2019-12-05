import Link from "next/link";

const linkStyle = {
    marginRight: 15
  };
const header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
        <a style={linkStyle}>A propos de</a>

        </Link>
    </div>
)
export default header;