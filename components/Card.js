function Card({ children, type }) {
    return (
        <>
            {type == "success" && (
                <div className="w-auto h-auto p-3 text-black px-8">
                    {children}
                </div>
            )}

            {type == "gray" && (
                <div className="w-auto h-auto p-4 bg-[#444343] text-black px-8">
                    {children}
                </div>
            )}

            {!type && (
                <div className="w-auto h-auto p-3 bg-white text-black px-8">
                    {children}
                </div>
            )}
        </>
    )
}

export default Card
