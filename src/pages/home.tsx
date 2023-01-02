import React from "react";

import { Label } from "flowbite-react";

import { Icon } from "@iconify/react";

export default function Home() {
  const emailReciever = "abeldustin@gmail.com";
  const [form, setFrom] = React.useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  React.useEffect(() => {
    document.title = "Adhxabre | Contact";
  }, []);

  const handleOnChange = (e: any) => {
    setFrom({ ...form, [e.target.name]: e.target.value });
  };

  const sendMail = () => {
    const mailtoUrl = `mailto:${emailReciever}?subject=New Messages!&body=Hello, my name is ${form.name} and this is my phone number ${form.phone}.%0D%0A${form.message}`;

    window.location.assign(mailtoUrl);
  };

  const handleSubmit = () => {
    sendMail();
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(25,25,25,0.9), rgba(25,25,25,0.9)), url(https://ik.imagekit.io/CoffeeLatteShop/Alfee_Jeanne_D_Arc.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -9999,
        }}
        className="w-full h-screen flex justify-center items-center"
      >
        <div className="bg-white w-[60%] h-[75%] rounded-xl flex z-[1]">
          <div className="flex-1">
            <img
              src="https://ik.imagekit.io/CoffeeLatteShop/Alfee_Jeanne_D_Arc.jpg"
              alt="..."
              className="rounded-l-xl object-cover w-auto h-full"
            />
          </div>
          <div className="flex-1 flex justify-center items-center">
            <form className="p-10 w-full h-min flex flex-col justify-center items-center gap-5">
              <h1 className="self-center mb-10 text-5xl text-neutral-800 font-black">
                CONTACT US!
              </h1>
              <div className="w-full h-min block text-neutral-800">
                <Label
                  htmlFor="email"
                  className="text-lg font-semibold"
                  value="Email"
                />
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events none text-neutral-800">
                    <Icon icon="ic:round-email" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="w-full h-9 bg-gray-50 border border-gray-300 text-neutral-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                    required={true}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="w-full h-min block text-neutral-800">
                <Label
                  htmlFor="name"
                  className="text-lg font-semibold"
                  value="Name"
                />
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events none text-neutral-800">
                    <Icon icon="material-symbols:person" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full h-9 bg-gray-50 border border-gray-300 text-neutral-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                    required={true}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="w-full h-min block text-neutral-800">
                <Label
                  htmlFor="phone"
                  className="text-lg font-semibold"
                  value="Phone"
                />
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events none text-neutral-800">
                    <Icon icon="material-symbols:phone-enabled" />
                  </div>
                  <input
                    name="phone"
                    type="tel"
                    id="phone"
                    placeholder="Your phone"
                    className="w-full h-9 bg-gray-50 border border-gray-300 text-neutral-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                    required={true}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <div className="w-full h-min block text-neutral-800">
                <Label
                  htmlFor="message"
                  className="text-lg font-semibold"
                  value="Message"
                />
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events none text-neutral-800">
                    <Icon icon="mdi:message-group" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Your messages"
                    className="resize-none w-full h-18 bg-gray-50 border border-gray-300 text-neutral-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5"
                    required={true}
                    onChange={handleOnChange}
                  />
                </div>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white text-xl font-[600] rounded-lg bg-neutral-800 border border-neutral-800 mt-5 px-8 py-2 ease-out duration-150 hover:bg-white hover:text-neutral-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
