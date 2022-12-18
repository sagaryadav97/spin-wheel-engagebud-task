interface wheelProps {
    rotate: () => void
    count: number
    status: boolean
}

function Wheel({ rotate, count,status }: wheelProps) {
    
    return (
        <>
            <div
                className="md:h-[600px] md:w-[600px] w-[300px] h-[300px] flex justify-center items-center relative"
            >
                <div
                    style={{
                        transform: `rotate(${count}deg)`,
                        transition: "8s",
                    }}
                    className={`md:h-[600px] md:w-[600px] w-[300px] h-[300px] rounded-full border-[#ECBA3F] bg-[#ECBA3F]	md:border-[15px] border-[8px] flex-row relative overflow-hidden`}
                >
                    <div className="my-custom-style br1 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]">30% SITEWIDE OFF</div>
                    </div>
                    <div className="my-custom-style br2 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]"> BUY 1 GET 1 FREE </div>
                    </div>
                    <div className="my-custom-style br3 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]">
                            FREE COFFEE MUG ON PURCHASE WORTH 1000+
                        </div>
                    </div>
                    <div className="my-custom-style br4 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]">
                            Buy 2 Effervescent tablets & get 1 free
                        </div>
                    </div>
                    <div className="my-custom-style br5 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]">Free 50g tea on purchase of Rs. 500</div>
                    </div>
                    <div className="my-custom-style br6 md:top-[80px] top-[36px]">
                        <div className="txt-ct md:text-[18px] text-[9px] md:ml-[-80px] md:w-[120px] w-[50px] ml-[-20px]">HOT CHOCLATE FREE WITH TEA</div>
                    </div>
                </div>
                <div className="absolute md:w-[80px] w-[50px] md:mt-[0px] mt-[-15px] ">
                    <img className="md:ml-[10px] ml-[5px]" src="giftArrow.png" alt="" />
                </div>
            </div>
            <button style={{
                opacity:status && 0.5
            }} onClick={rotate} className='w-[150px] rounded-full bg-[#146531] font-bold h-[50px] text-[white]'>Spin</button>
        </>
    )
}

export default Wheel
