import { useState } from "react"
import "./App.css"
import Form from "src/components/Form"
import Wheel from "src/components/Wheel"
import RewordForm from "./components/RewordForm"

export enum sections {
  Register,
  SpinWheel,
  Reward,
  close,
}

export enum TACEnum {
  No,
  Yes,
}

function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email)
}

function isValidNumber(number) {
  return /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){9}\d$/.test(
    number
  )
}

const init = {
  email: "",
  phoneNumber: "",
  currentSection: sections.Register,
  promoCode: "",
  tAndC: TACEnum.No,
  emailError: "",
  phoneNumberError: "",
  tAndCError: "",
  offerClaimed: "",
  error: "",
  spinStats: false,
  copyText: false,
}
function App() {
  const [count, setCount] = useState<number>(0)
  const [fields, setFields] = useState(init)

  function handleEmailChange(e: string) {
    if (e.length > 0 && !isValidEmail(e)) {
      setFields({
        ...fields,
        email: e,
        emailError: "Email is invalid",
      })
    } else {
      setFields({
        ...fields,
        email: e,
        emailError: "",
      })
    }
  }

  function handleTAndCChange() {
    setFields({
      ...fields,
      tAndC: fields?.tAndC === TACEnum.Yes ? TACEnum.No : TACEnum.Yes,
      tAndCError: "",
    })
  }

  function handlePhoneChange(e: string) {
    if (
      e.toLocaleString().length > 0 &&
      (!isValidNumber(e) || e.toLocaleString().length !== 13)
    ) {
      setFields({
        ...fields,
        phoneNumber: e,
        phoneNumberError: "Phone Number is invalid. Starts with +91",
      })
    } else {
      setFields({
        ...fields,
        phoneNumber: e,
        phoneNumberError: "",
      })
    }
  }

  function getWheelResult() {
    if (fields.tAndC === TACEnum.No) {
      setFields({
        ...fields,
        tAndCError: "Please Read T&C",
      })
      return false
    }
    if (fields.email && fields.phoneNumber) {
      setFields({
        ...fields,
        error: "",
        currentSection: sections.SpinWheel,
      })
    } else
      setFields({
        ...fields,
        error: "Please Fill All the Fields",
      })
  }

  function rotate() {
    // api call
    // fetch("/getRewords/userEmail")
    //   .then((res) => res.json())
    //   .then(
    //     (result) => {
    //       setFields({
    //         ...fields,
    //         promoCode: result.reward,
    //         offerClaimed: result.reward,
    //         currentSection: sections.Reward,
    //       })
    //     },
    //     (error) => {
    //       setFields({
    //         ...fields,
    //         error: "something went wrong",
    //       })
    //     }
    //   )
    if (!fields.spinStats) {
      setCount(360 * 5)
      setFields({
        ...fields,
        spinStats: true,
      })
      let timerID = setInterval(() => {
        setCount((count) => count + 90)
        clearInterval(timerID)
      }, 6000)
      let timerIDTwo = setInterval(() => {
        setFields({
          ...fields,
          promoCode: "XAXPDF20",
          offerClaimed: "30% SITEWIDE OFF",
          currentSection: sections.Reward,
        })
        clearInterval(timerIDTwo)
      }, 18000)
    }
  }
  function handleClose() {
    console.log("handleClose")
    navigator.clipboard.writeText(fields.promoCode)
    setFields(init)
  }
  function handleCopy() {
    navigator.clipboard.writeText(fields.promoCode)
    setFields({
      ...fields,
      copyText: true,
    })
  }
  function handleNoLucky() {
    setFields({
      currentSection: sections.close,
      email: "",
      phoneNumber: "",
      promoCode: "",
      offerClaimed: "",
      tAndC: TACEnum.No,
      emailError: "",
      phoneNumberError: "",
      tAndCError: "",
      error: "",
      spinStats: false,
      copyText: false,
    })
  }
  console.log(fields, "count")

  return (
    <>
      <div className="bg-[#C6EFC8] h-screen w-screen relative">
        <div className="w-full h-full overflow-hidden relative">
          <img
            className="md:h-3/6 h-[15%] absolute top-0 left-0"
            src="Group 1771.svg"
            alt=""
          />
          <img
            className="md:h-3/4 h-[30%] absolute top-0 right-0"
            src="Group 1772.svg"
            alt=""
          />
          <img
            className="md:h-3/2 h-[15%] absolute bottom-0 left-0"
            src="Group 1773.svg"
            alt=""
          />
          <img
            className="md:h-3/4 h-[15%] absolute bottom-0 right-0"
            src="Group 1774.svg"
            alt=""
          />
        </div>
        {fields.currentSection === sections.Register && (
          <div className="z-30 absolute top-0 gap-16 flex md:flex-row items-center justify-center h-full w-full flex-col">
            <img
              className="md:h-[400px] md:w-[400px] w-[150px] h-[150px] md:mt-[0px] mt-[-200px]"
              src="wheel.svg"
              alt=""
            />
            <Form
              handleEmailChange={handleEmailChange}
              handlePhoneChange={handlePhoneChange}
              handleTAndCChange={handleTAndCChange}
              handleNoLucky={handleNoLucky}
              getWheelResult={getWheelResult}
              email={fields.email}
              tAndC={fields.tAndC}
              phoneNumber={fields.phoneNumber}
              phoneNumberError={fields.phoneNumberError}
              emailError={fields.emailError}
              error={fields.error}
              tAndCError={fields.tAndCError}
            />
          </div>
        )}
        {fields.currentSection === sections.SpinWheel && (
          <div className="z-30 absolute top-0 gap-16 flex md:flex-co; items-center justify-center h-full w-full flex-col">
            <Wheel rotate={rotate} status={fields.spinStats} count={count} />
          </div>
        )}

        {fields.currentSection === sections.Reward && (
          <div className="z-30 absolute top-0 gap-16 flex md:flex-row items-center justify-center h-full w-full flex-col">
            <img
              className="md:h-[400px] md:w-[400px] w-[150px] h-[150px] md:mt-[0px] mt-[-320px]"
              src="wheel.svg"
              alt=""
            />
            <RewordForm
              promoCode={fields.promoCode}
              handleClose={handleClose}
              handleCopy={handleCopy}
              offerClaimed={fields.offerClaimed}
              copyText={fields.copyText}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default App
