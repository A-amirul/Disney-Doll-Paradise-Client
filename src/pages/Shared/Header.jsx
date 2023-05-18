import { Link } from "react-router-dom";
import logo from "/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
	const { user, logOut } = useContext(AuthContext);
	const handleLogOut = () => {
		logOut()
			.then(() => { })
			.catch(error => console.log(error))
	}
	const NavItems = <>
		<li> <Link to="/">Home</Link></li>
		<li><Link>Parent</Link></li>
		<li><Link to="/blog">Blogs</Link></li>
	</>
return (
	<div className="navbar bg-gray-300 px-8">
		<div className="navbar-start">
			<div className="dropdown">
				<label tabIndex={0} className="btn btn-ghost lg:hidden">
					<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
				</label>
				<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
					{NavItems}
				</ul>
			</div>
			<Link to="/" className="font-extrabold">
				<img className="mx-auto" style={{ width: "60px", height: "40px" }} src={logo} alt="" />DisneyDolls
			</Link>
		</div>
		<div className="navbar-center hidden lg:flex">
			<ul className="menu menu-horizontal px-2">
				{NavItems}
			</ul>
		</div>
		<div className="navbar-end">

			<div className='text-blue-600 hover:bg-blue-900 p-3 rounded-xl font-bold text-xl'> 
				{user ? <img onClick={handleLogOut}
					className='w-10 h-10 rounded-full border bottom-2 border-black' title={user?.reloadUserInfo?.displayName} src={user?.reloadUserInfo?.photoUrl} alt=""/> : <Link
							to='/login'
							className={({ isActive }) => (isActive ? 'active' : 'default')}
						> Login</Link>
						}

			</div>

		</div>
	</div>
);
};

export default Header;