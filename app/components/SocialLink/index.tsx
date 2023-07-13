const SocialLink = ({ link }) => {
  return (
    <>
      {link?.url && (
        <div className="mb-2 text-blueGray-600 cursor-pointer">
          <ul className="w-full flex justify-center items-center gap-6 text-gray-600">
            <li>
              <a
                className="hover:text-gray-900 transition-colors duration-200 text-2xl"
                href={link?.url}
              >
                {link?.plapform}
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}

export default SocialLink
