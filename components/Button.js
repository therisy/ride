function Button({ children }) {
  return (
    <span className="flex justify-center items-center p-2 border-2 border-indigo-500 rounded-2xl text-center w-28 cursor-pointer">
        {children}
    </span>
  )
}

export default Button
