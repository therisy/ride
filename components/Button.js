function Button({ children, type }) {
  return (
    <>
      {type == "success" && (
        <span className="flex justify-center items-center text-white p-2 hover:duration-200 hover:bg-green-600 bg-green-500 rounded-2xl text-center w-28 cursor-pointer text-xl">
          {children}
        </span>
      )}

      {type == "danger" && (
        <span className="flex justify-center items-center text-white p-2 hover:duration-200 hover:bg-red-600 bg-red-500 rounded-2xl text-center w-28 cursor-pointer text-xl">
          {children}
        </span>
      )}

      {!type && (
        <span className="flex justify-center items-center text-white p-2 hover:duration-200 hover:bg-orange-600 bg-orange-500 rounded-2xl text-center w-28 cursor-pointer text-xl">
          {children}
        </span>
      )}
    </>
  )
}

export default Button
