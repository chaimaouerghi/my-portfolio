import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <Link href="/">Chaima's Portfolio</Link>
      </div>
      
    </nav>
  );
};

export default Navbar;
