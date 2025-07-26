const BaseButton = ({
  type='button',
  label
}) => {
  return (
    <button
      className="rounded-full px-5 py-4 font-semibold  w-full bg-blue-700 hover:bg-blue-800 text-white cursor-pointer duration-300"
      type={type}
    >
      {label}
    </button>
  )
}

export default BaseButton