import { narrative } from "../../constant/constants";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import NavigateButton from "../NavigateButton/NavigateButton";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="font-poppins">
      <footer className="footer p-10 text-base-content">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link className="link link-hover">Branding</Link>
          <Link className="link link-hover">Design</Link>
          <Link className="link link-hover">Marketing</Link>
          <Link className="link link-hover">Advertisement</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <Link className="link link-hover">About us</Link>
          <Link className="link link-hover">Contact</Link>
          <Link className="link link-hover">Jobs</Link>
          <Link className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </nav>
      </footer>
      <footer className="footer px-10 py-4 border-t text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p>
            {`Copyright © ${new Date().getFullYear()} - All right reserved by 
            ${narrative}`}
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link>
              <NavigateButton
                title={<FaTwitter size={25} />}
                link={""}
                style={""}
              />
            </Link>
            <Link>
              <NavigateButton
                title={<FaYoutube size={25} />}
                link={""}
                style={""}
              />
            </Link>
            <Link>
              <NavigateButton
                title={<FaFacebookF size={25} />}
                link={""}
                style={""}
              />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
