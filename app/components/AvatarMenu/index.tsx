import Image from 'next/image'

const AvatarMenu = () => {
  return (
    <div className="relative ml-3">
      <div className="fixed bottom-0 right-0">
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHoverTop"
          data-dropdown-trigger="hover"
          data-dropdown-placement="top"
          className="text-white   focus:outline-none font-medium text-sm
          px-4 py-2.5 text-center inline-flex items-center"
          type="button"
        >
          <Image
            width={400}
            height={400}
            className="h-8 w-8 rounded-full"
            src="/img/gerl.jpg"
            alt=""
          />
        </button>
      </div>
    </div>
  )
}
export default AvatarMenu
