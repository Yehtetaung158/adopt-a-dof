import React from "react";
import Form from "../component/Form";
import Foolter from "../component/Foolter";

const ContactPage = () => {
  return (
    <div className=" flex flex-col gap-10 w-full p-4">
       <div className="">
       <iframe
          className="w-full h-64 md:px-10 px-0 md:h-96"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5849.817444574656!2d96.09511681658294!3d21.95810718240522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2smm!4v1719913288467!5m2!1sen!2smm"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className=" bg-formimg bg-cover">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4  bg-right relative mt-4 bg-gray-400  p-4 bg-opacity-25 py-6 ">
        <div className="w-full md:w-1/2 ">
          <div className="relative overflow-x-auto ">
            <table className="w-full ">
              <tbody>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 text-2xl text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Get in touch with us
                  </th>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Phone
                  </th>
                  <td className="px-6 py-4">959784224472</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Email Address
                  </th>
                  <td className="px-6 py-4">yha15380@gmail.com</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Address
                  </th>
                  <td className="px-6 py-4">Adipadili Rd * 38 / Mahaaungmyay / Mandalay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Form/>
      </div>
      </div>
      <Foolter/>
    </div>
  );
};

export default ContactPage;
