const Footer = () => {
  return (
    <>
      <footer className="footer flex flex-wrap p-4 lg:p-10 justify-around bg-neutral text-neutral-content lg:mt-10">
        <aside className="flex items-center gap-16 lg:gap-0">
          <img className="h-28" src="/Logo.png" alt="logo" />
          <p>
            <span className="text-2xl text-primary font-bold ml-12">TRENDY</span>
            <br />© 2023 TRENDY All Rights Reserved.
          </p>
        </aside>
        <nav>
          <header className="footer-title text-center font-bold text-xl">Social</header>
          <div className="grid grid-flow-col gap-4">
            <div className="grid gap-4">
              <nav className="flex justify-center flex-wrap gap-12 text-gray-500 font-medium">
                <a className="hover:text-gray-900" href="#">
                  Home
                </a>
                <a className="hover:text-gray-900" href="#">
                  Screening
                </a>
                <a className="hover:text-gray-900" href="#">
                  Services
                </a>
                <a className="hover:text-gray-900" href="#">
                  Media
                </a>
              </nav>

              <div className="flex justify-center space-x-14">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" />
                </a>
                <a
                  href="https://messenger.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="https://img.icons8.com/fluent/30/000000/twitter.png" />
                </a>
              </div>
              <p className="text-center text-gray-700 font-medium">
                &copy; 2023 TRENDY EMPIRE All rights reservered.
              </p>
            </div>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
