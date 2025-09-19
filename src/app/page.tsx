"use client";

import React, { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import { toast } from "sonner";
import EventInputField from "./components/event-input-filed";
import EventButton from "./components/event-button";
import { TypeOfUserDetails } from "./types/type";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HampersSelector from "./components/hamper-selector";
import { isValidMobile } from "./utils/functions";
import { getErrorMessage, publicAPI } from "./utils/axios";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const UserCreation: React.FC = () => {
  const [userDetails, setUserDetails] = useState<TypeOfUserDetails>({
    contactPerson: "",
    mobileNumber: "",
    companyName: "",
    companyAddress: "",
    email: "",
    products: [],
  });

  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [userRegistered, setUserRegistered] = useState<boolean>(false);

  const bookTheTicket = async () => {
    if (
      !userDetails.mobileNumber ||
      !userDetails.contactPerson ||
      !userDetails.companyName ||
      !userDetails.companyAddress
    ) {
      setError(true);
      toast.error("Please fill all the required fields.");
      return;
    }

    if( userDetails.products?.length === 0){

      setError(true);
      toast.error("Please select at least 1 quantity in one of the hampers");
      return;

    }

    if (!isValidMobile(userDetails.mobileNumber)) {
      setError(true);
      toast.error("Contact Number must be exactly 10 digits.");
      return;
    }

    setError(false);
    setLoading(true);

    const toastId = toast.loading("Registering the user...");

    try {
      const payload = {
        name: userDetails.contactPerson,
        contactNumber: userDetails.mobileNumber,
        companyName: userDetails.companyName,
        address: userDetails.companyAddress,
        email: userDetails.email ?? undefined,
        products:  userDetails.products?.length === 0 ? [] : (userDetails.products?.filter((el)=>el.qty > 0)?.length > 0

        ?

        userDetails.products?.filter((el)=>el.qty > 0)?.map((product) => ({
          productName: product.productName,
          qty: product.qty,
          price: isNaN(Number(product.price)) ? 0 : Number(product.price),
        }))
        
        : []
      
      )
      };

      const response = await publicAPI.post("/enquiry", {
        name: payload?.name,
        companyName: payload?.companyName,
        address: payload?.address,
        email: payload?.email,
        contactNumber: payload?.contactNumber,
        products: payload?.products,
      });

      if (response?.status === 201) {
        toast.dismiss(toastId);
        setUserRegistered(true);

        setTimeout(() => {
          setUserRegistered(false);
        }, 4000);

        resetFields();
      } else {
        toast.error("Something went wrong. Please try again.", {
          id: toastId,
          duration: 3000,
        });
      }
    } catch (err) {
      toast.error(getErrorMessage(err), { id: toastId, duration: 3000 });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, type } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [name]: type === "number" ? (value === "" ? 0 : Number(value)) : value,
    }));
  };

  const resetFields = () => {
    setUserDetails({
      contactPerson: "",
      mobileNumber: "",
      companyName: "",
      companyAddress: "",
      email: "",
      products: [],
    });
  };

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 1,
    arrows: false,

    appendDots: (dots: React.ReactElement[]) => (
      <div
        style={{
          position: "absolute",
          bottom: "4rem",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyleType: "none",
            display: "flex", // Use flexbox for layout
            gap: ".5rem",
          }}
        >
          {dots.map((dot: React.ReactElement, index: number) => (
            <li
              key={index}
              style={{
                margin: "0", // Space between dots
              }}
            >
              {React.cloneElement(dot, {
                style: {
                  width: "12px", // Dot size
                  height: "12px", // Dot size
                  borderRadius: "50%", // Circular dots
                  backgroundColor: dot.props.className.includes("slick-active")
                    ? "#ffffff" // Color for the active dot
                    : "#D9D9D9", // Color for inactive dots
                  border: "none",
                  padding: 0,
                  display: "inline-block",
                  zIndex: "100",
                },
              })}
            </li>
          ))}
        </ul>
      </div>
    ),
  };

  return (
    <>
      <div className="relative h-[50vh] w-[100vw]">
        {/* Slider is client-only (ssr:false) so it won't run during SSR */}
        <Slider {...slickSettings}>
          {[1, 2, 3, 4].map((item: number) => (
            <div key={item} className="relative w-full h-[50vh] bg-black/50">
              <Image
                quality={100}
                src={`/diwali-hamper-${item}.png`}
                alt={`diwali-hamper-${item}`}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          ))}
        </Slider>
      </div>

      {userRegistered ? (
        <div className="flex flex-col items-center justify-center bg-primary border border-green-200 rounded-2xl text-center shadow-sm mt-8 w-[90vw] m-auto p-6">
          <p className="text-lg font-semibold text-white">
            ✅ Query Submitted
          </p>
          <p className="mt-2 text-sm text-white">
            Our team will contact you shortly
          </p>
        </div>
      ) : (
        <div className=" pl-6 pr-6 bg-white pt-8 rounded-custom-xl">
          <div>
            <HampersSelector
              value={userDetails?.products?.map((el) => {
                return {
                  id: el.id,
                  quantity: el.qty,
                };
              })} // or use userDetails.hamper if that's what you store
              onChange={(
                id: number,
                price: number,
                name: string,
                quantity: number
              ) => {
                setUserDetails((prev) => {
                  const products = Array.isArray(prev.products)
                    ? [...prev.products]
                    : [];

                  const idx = products.findIndex((p) => p.id === id);

                  if (quantity === 0) {
                    if (idx === -1) {
                      return prev;
                    }
                    const updated = products.filter((p) => p.id !== id);

                    return {
                      ...prev,
                      products: updated,
                    };
                  }

                  // quantity > 0 -> add or update
                  const newProduct = {
                    id,
                    productName: name,
                    price,
                    qty: quantity,
                  };

                  if (idx === -1) {
                    // add new product
                    return {
                      ...prev,
                      products: [...products, newProduct],
                    };
                  } else {
                    // update existing product
                    const updated = products.map((p) =>
                      p.id === id
                        ? { ...p, productName: name, price, qty: quantity }
                        : p
                    );
                    return {
                      ...prev,
                      products: updated,
                    };
                  }
                });
              }}
            />

            <EventInputField
              error={error}
              errorContactNumber={false}
              errorEmail={false}
              handleChange={handleChange}
              name="contactPerson"
              value={userDetails.contactPerson}
              placeholder="Enter your name here"
              label="Your Name"
              required={true}
              type="text"
            />

            <EventInputField
              error={error}
              errorContactNumber={false}
              errorEmail={false}
              handleChange={handleChange}
              name="email"
              value={userDetails.email}
              placeholder="Enter your mail here"
              label="Your Email"
              required={false}
              type="text"
            />

            <EventInputField
              error={error}
              errorContactNumber={false}
              errorEmail={false}
              handleChange={handleChange}
              name="mobileNumber"
              value={userDetails.mobileNumber}
              placeholder="Enter your contact number"
              label="Contact Number"
              required={true}
              type="text"
            />

            <EventInputField
              error={error}
              errorContactNumber={false}
              errorEmail={false}
              handleChange={handleChange}
              name="companyName"
              value={userDetails.companyName}
              placeholder="Company Name"
              label="Company Name"
              required={true}
              type="text"
            />

            <EventInputField
              error={error}
              errorContactNumber={false}
              errorEmail={false}
              handleChange={handleChange}
              name="companyAddress"
              value={userDetails.companyAddress}
              placeholder="Company Address"
              label="Company Address"
              required={true}
              type="text"
            />
          </div>

          <EventButton
            id={123}
            handleClick={() => !loading && bookTheTicket()}
            text={loading ? "Please Wait..." : "Proceed"}
            imageName={"right-arrow"}
          />
        </div>
      )}
    </>
  );
};

export default UserCreation;
