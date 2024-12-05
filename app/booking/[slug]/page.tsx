import { addQuery } from "@/app/actions/AddQuery";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import { FormEvent } from "react";

const Booking = () => {
  // async function onSubmit(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const formData = new FormData(event.currentTarget);
  //   const response = await fetch("http://localhost:8080/api/v1/booking", {
  //     method: "POST",
  //     body: formData,
  //   });

  //   // Handle response if necessary
  //   const data = await response.json();
  //   // ...
  // }

  return (
    <>
      <form id="contact-form" action={addQuery} method="POST">
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="fullName"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Họ và tên
            </label>
            <input
              name="fullName"
              type="text"
              id="fullName"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Họ và tên"
              required
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Số điện thoại
            </label>
            <input
              name="phone"
              type="tel"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="09..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              name="email"
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="nguyena@gmail.com"
              required
            />
          </div>
          <div>
            <label
              htmlFor="ngaydi"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Ngày đi
            </label>
            <input
              name="ngaydi"
              type="text"
              id="ngaydi"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Ngày đi"
              required
            />
          </div>
          <div>
            <label
              htmlFor="nhaxe"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nhà xe
            </label>
            <input
              name="nhaxe"
              type="text"
              id="nhaxe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=" Nhà xe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="diemdon"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Điểm đón
            </label>
            <input
              name="diemdon"
              type="diemdon"
              id="diemdon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="diemtra"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Điểm tra
          </label>
          <input
            name="diemtra"
            type="text"
            id="diemtra"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=" Điểm tra"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="nguoilon"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Người lớn
          </label>
          <input
            name="nguoilon"
            type="text"
            id="nguoilon"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Người lớn"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="treem"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Trẻ em
          </label>
          <input
            name="treem"
            type="text"
            id="treem"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="    Trẻ em"
            required
          />
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              defaultValue=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Đồng ý với chính sách của chúng tôi .
          </label>
          <Link
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Limo Đà Lạt
          </Link>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Đặt Vé
        </button>
      </form>
    </>
  );
};

export default Booking;
