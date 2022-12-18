export enum TACEnum {
    Yes,
    No,
}
export interface props {
    promoCode: string
    copyText: Boolean
    offerClaimed: string
    handleCopy: () => void
    handleClose: () => void
}

function RewordForm({ copyText, offerClaimed, handleClose, handleCopy, promoCode }: props) {

    return (
        <>
            <div className="md:w-[400px] sm:w-[400px] w-[90%] flex flex-col gap-4 p-[10px]">

                <div className="text-[32px] text-center font-bold">
                    <div className="text-[24px] text-center font-bold">Congrats! You Won:</div>
                    {offerClaimed}
                </div>

                {/* promo Code */}
                <div className="w-full grid grid-cols-[3fr,1fr] items-center justify-center rounded-[10px] bg-[#146531] font-bold h-[70px] text-[white]">
                    <div className="md:text-[28px] text-[20px] bg-[#ecececc9] h-[70px] flex items-center justify-center">{promoCode}</div>
                    <div
                        onClick={handleCopy}
                        className="md:text-[20px] text-[16px]">
                        {copyText ? 'COPIED' : 'COPY'}
                    </div>
                </div>
                {/* submit button */}
                <button
                    onClick={handleClose}
                    className="w-[90%] m-auto rounded-full bg-[#146531] font-bold h-[50px] text-[white]">
                    Close Panel & Copy
                </button>

                {/* help text */}
                <div className="text-[8px] m-auto md:flex-row flex-col flex text-[#000000]">
                    <span>
                        *If you win, you can claim your coupon for 10 minutes only!
                    </span>
                </div>

            </div>
        </>
    )
}

export default RewordForm
