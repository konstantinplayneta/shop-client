import SocialLink from '../SocialLink'
const SocialList = ({ links }) => (
  <div className="flex flex-wrap md:justify-between items-center text-center pl-10 pr-10 sm:justify-center mt-7">
    {links.map((link, index) => (
      <SocialLink key={index} link={link} />
    ))}
  </div>
)

export default SocialList
