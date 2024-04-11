import GithubIcon from "../../assets/github-mark.svg";
import EmailIcon from "../../assets/email.svg";
import LinkedinIcon from "../../assets/linkedin.png";

function Contacts() {
  return (
    <>
      <main
        id="contacts"
        className="flex flex-col flex-1 text-center items-center justify-center"
      >
        <a href="https://github.com/4genso">
          <div className="m-5 flex flex-col items-center hover:text-white">
            <img src={GithubIcon} alt="Github Icon" className="h-24 m-2" />
            <div>Github</div>
            <div>4genso</div>
          </div>
        </a>

        <a href="mailto: justin.wu.2001@gmail.com">
          <div className="m-5 flex flex-col items-center hover:text-white">
            <img src={EmailIcon} alt="E-mail Icon" className="h-24 m-2" />
            <div>E-mail</div>
            <div>justin.wu.2001@gmail.com</div>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/justin-wu-a87855208/">
          <div className="m-5 flex flex-col items-center hover:text-white">
            <img src={LinkedinIcon} alt="Linkedin Icon" className="h-24 m-2" />
            <div>Linkedin</div>
            <div>Justin Wu</div>
          </div>
        </a>
      </main>
    </>
  );
}

export default Contacts;
