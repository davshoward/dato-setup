import Link from 'next/link';

const Header = () => {
	return (
		<header className="w-full">
			<div className="flex flex-wrap items-center justify-between p-3 lg:p-6">
				<Link href="/" className="block" aria-label="Homepage">
					Dato Setup
				</Link>
			</div>
		</header>
	);
};

export default Header;
