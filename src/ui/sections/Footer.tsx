const Footer = () => {
	return (
		<footer id="footer" className="p-5" role="contentinfo">
			<span className="block text-center text-xs text-current lg:text-right">
				{`© ${new Date().getFullYear()}`}
			</span>
		</footer>
	);
};

export default Footer;
