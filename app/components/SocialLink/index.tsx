const SocialLink = ({ link }) => {
  console.log('SocialLink', link)
  return (
    <div className="mb-2 text-blueGray-600 cursor-pointer">
      {link?.url && (
        <>
          <i
            className={`fas fa-briefcase mr-2 text-lg text-blueGray-400 ${link.platform} `}
          />
          {link.url}
        </>
      )}
    </div>
  )
}

export default SocialLink
