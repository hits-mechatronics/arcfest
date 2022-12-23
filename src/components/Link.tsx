interface props {
  href: string;
  linkText: string;
  nonLinkText?: string;
}
const Link: React.FC<props> = ({ href, linkText, nonLinkText }) => {
  return (
    <a
      className="text-[0.7rem] md:text-xs opacity-90"
      href={href}
      target="_blank"
    >
      {nonLinkText}
      <span className="underline">{linkText}</span>
    </a>
  );
};

export default Link;
