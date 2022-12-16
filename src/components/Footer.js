export const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center">
      <div className="flex gap-4">
        <a
          className="w-6 h-6 cursor-pointer"
          href="https://github.com/MiheerTamkhane/"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/assests/svg/github.svg" alt="github" />
        </a>
        <a
          className="w-6 h-6 cursor-pointer"
          href="https://www.linkedin.com/in/miheertamkhane"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/assests/svg/linkedin.svg" alt="linkedin" />
        </a>
        <a
          className="w-6 h-6 cursor-pointer"
          href="https://twitter.com/MiheerTamkhane"
          rel="noreferrer"
          target="_blank"
        >
          <img src="/assests/svg/twitter.svg" alt="twitter" />
        </a>
      </div>
      <p>Developed By Miheer</p>
    </footer>
  );
};
