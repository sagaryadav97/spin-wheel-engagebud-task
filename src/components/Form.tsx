import { useState } from "react"
import Field from "./Field"

export enum TACEnum {
  Yes,
  No,
}
export interface props {
  email: string
  phoneNumber: string
  tAndC: TACEnum
  handlePhoneChange: (e: string) => void
  handleTAndCChange: () => void
  getWheelResult: () => void
  handleNoLucky: () => void
  handleEmailChange: (e: string) => void
  phoneNumberError: string
  emailError: string
  tAndCError: string
  error: string
}

function Form({
  handleNoLucky,
  email,
  error,
  phoneNumber,
  getWheelResult,
  tAndC,
  handleTAndCChange,
  tAndCError,
  handlePhoneChange,
  handleEmailChange,
  phoneNumberError,
  emailError,
}: props) {
  return (
    <>
      <div className="md:w-[400px] sm:w-[400px] w-[90%] flex flex-col gap-4 p-[10px]">
        <div className="text-[24px] text-left font-bold">
          This is how EngageBud looks like in action!
          {error && (
            <h4 className="text-left text-[14px] text-[red]">{error}</h4>
          )}
        </div>
        <div className="">
          <Field
            handleChange={handleEmailChange}
            value={email}
            image="mail.svg"
            placeholder="joe@gmail.com"
            title="Email"
          />
          {emailError && <h2 className="text-left text-[red]">{emailError}</h2>}
        </div>

        <div className="">
          <Field
            handleChange={handlePhoneChange}
            value={phoneNumber}
            image="phone.svg"
            placeholder="+91 98256 XXXXX"
            title="Phone number"
          />
          {phoneNumberError && (
            <h2 className="text-left text-[red]">{phoneNumberError}</h2>
          )}
        </div>
        {/* t and c */}
        <div className="">
          <div className="flex flex-row gap-2 border-2 border-[black] rounded-[8px] h-[60px] items-center justify-center w-full">
            <div className="w-[40px] flex justify-center items-center">
              <div
                onClick={() => handleTAndCChange()}
                className="bg-[black] w-[20px] h-[20px] rounded-[4px] flex items-center justify-center"
              >
                {tAndC && (
                  <div className="bg-[white] w-[10px] h-[10px] rounded-[4px]"></div>
                )}
              </div>
            </div>
            <div className="text-[10px] text-left w-full">
              I agree to receiving recurring automated messages at the number I
              have provided. <br />
              Consent is not a condition to purchase.
            </div>
          </div>
          {tAndCError && <h2 className="text-left text-[red]">{tAndCError}</h2>}
        </div>

        {/* submit button */}
        <button
          onClick={getWheelResult}
          className="w-full rounded-full bg-[#146531] font-bold h-[50px] text-[white]"
        >
          Try your Luck
        </button>

        {/* help text */}
        <div className="text-[8px] md:flex-row flex-col flex text-[#000000]">
          <span>*You can spin the wheel only once!</span>
          <span>
            *If you win, you can claim your coupon for 10 minutes only!
          </span>
        </div>

        {/* close box */}
        <div className="font-bold flex flex-row gap-2 text-[16px] items-end justify-end">
          No, I don’t feel lucky
          <img
            onClick={handleNoLucky}
            className="w-[25px] h-[25px] cursor-pointer"
            src="close.png"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Form
