interface props {
  href: string;
  linkText: string;
  nonLinkText?: string;
}
const Link: React.FC<props> = ({ href, linkText, nonLinkText }) => {
  return (
    <a className="text-[0.8rem] md:text-sm" href={href} target="_blank">
      {nonLinkText}
      <span className="underline">{linkText}</span>
    </a>
  );
};

export default Link;
