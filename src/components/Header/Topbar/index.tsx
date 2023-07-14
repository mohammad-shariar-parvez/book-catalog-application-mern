const Topbar = () => {
	return (
		<section className="absolute bg-topbarBg left-0 right-0  z-[3]  hidden md:block ">
			<div className="  flex items-center justify-between container px-4 py-1 ">
				<div>
					<small>
						<i className="bx bxs-phone-call p-1"></i>+ 1235 2355 98
					</small>
				</div>
				<div>
					<small>
						<i className="bx bxs-paper-plane p-1"></i>msptonmoy@gmail.com
					</small>
				</div>
				<div>
					<small>Open hours: Monday - Sunday 8:00AM - 9:00PM</small>
				</div>
			</div>
		</section>
	);
};
export default Topbar;
