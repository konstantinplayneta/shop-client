import SocialLink from '../SocialLink'
const SocialList = ({ links }) => (
  <div className="flex flex-wrap items-center text-center pl-10 pr-10 gap-24 justify-center mt-7">
    {links.map((link, index) => (
      <SocialLink key={index} link={link} />
    ))}
  </div>
)

export default SocialList
