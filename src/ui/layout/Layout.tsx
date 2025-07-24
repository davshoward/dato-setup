import clsx from 'clsx';
import type { LayoutQuery } from 'graphql/generated';
import type { PropsWithChildren } from 'react';

import Footer from '../sections/Footer';
import Header from '../sections/Header';

type LayoutProps = PropsWithChildren & {
	global: LayoutQuery | null;
};

const Layout = ({ children, global }: LayoutProps) => {
	if (!global) return null;

	return (
		<html lang="en" className="scroll-smooth break-words">
			<body className={clsx(`min-h-screen antialiased`)}>
				<div id="skiptocontent">
					<a href="#main" className="sr-only focus:not-sr-only">
						skip to main content
					</a>
				</div>

				<div id="site-container">
					<Header />
					<main id="main">{children}</main>
					<Footer />
				</div>
			</body>
		</html>
	);
};

export default Layout;
