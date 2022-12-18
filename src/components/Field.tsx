interface props {
    title: string
    placeholder: string
    image: string
    value: string | number
    handleChange: (e: any) => void
}

function Field({ title, placeholder, image, value, handleChange }: props) {
    return (
        <>
            <div className="flex row gap-2 bg-white h-[60px] text-[#49454F] border-2 border-b-[#186532] rounded-tr-[8px] rounded-tl-[8px] w-full">
                <div className="h-full w-[40px] flex items-center justify-center">
                    <img className="w-[20px] h-[20px]" src={image} alt="" />
                </div>
                <div className="flex flex-col justify-center items-start">
                    <label htmlFor="">{title}</label>
                    <input onChange={(e) => handleChange(e.target.value)} value={value} className="w-full outline-none" type="text" placeholder={placeholder} />
                </div>
            </div>
        </>
    )
}

export default Field