import React, { useCallback, useState } from "react";
import ButtonComponent from "./ButtonComponent";
import FormikForm from "./FormikForm";
import FormInput from "./FormikForm/formInput";
import { ClipLoader } from "react-spinners";
import * as Yup from "yup";
import cn from "classnames";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import sendMail from "../api/mail";

const EmailComponent = ({ buttonAppearence, extraClass }) => {
  const [loading, setloading] = useState(false);
  const showToastMessage = useCallback(() => {
    toast.success("Thank you for submitting!", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }, []);

  const showToastErrorMessage = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
  });

  const submitAction = async (values, submitProps) => {
    console.log(values);
    setloading(true);

    submitProps.setSubmitting(false);
    submitProps.resetForm();
    try {
      const data = await axios.post(
        "https://binance.stablepay.global/email",
        values
      );
      // await data.json();
      // console.log(data, "email data");
      // const data = sendMail(values.email);
      // console.log(data);
      if (data) {
        showToastMessage();
      } else {
        showToastErrorMessage();
      }
    } catch (error) {
      console.log("error", error);
      showToastErrorMessage();
    }
    setloading(false);
  };

  return (
    // <div className="">
    //   <FormikForm
    //     formClass="gap-1 items-center md:items-start"
    //     validationSchema={validationSchema}
    //     initialValues={{
    //       email: "",
    //     }}
    //     onSubmit={submitAction}
    //     fields={[
    //       {
    //         placeholder: "Enter Email Address",
    //         type: "email",
    //         name: "email",
    //         component: FormInput,
    //         inputClass: "py-1 px-4 h-full placeholder:text-sm rounded-md",
    //       },
    //     ]}
    //     action={() => (
    //       <>
    //         <ButtonComponent
    //           appearance={buttonAppearence}
    //           buttonText={
    //             loading ? (
    //               <ClipLoader loading={true} size={"1rem"} color={"white"} />
    //             ) : (
    //               "Get Early Access"
    //             )
    //           }
    //           type="submit"
    //           buttonClass="text-sm bg-pri-dark"
    //         />
    //       </>
    //     )}
    //   />
    // </div>
    <a
      href="https://forms.gle/oEnWBcPmJj87VLtw9"
      target="_blank"
      className={cn("", { [extraClass]: !!extraClass })}
    >
      <ButtonComponent
        buttonText="Get Early Access"
        buttonClass="text-sm bg-pri-dark"
      />
    </a>
  );
};

export default EmailComponent;
