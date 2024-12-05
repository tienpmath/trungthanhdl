import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import MainPage from "@/components/home/MainPage";

export const metadata = {
  title:
    "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt",
  description:
    "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi",
  openGraph: {
    title:
      "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt",
    description:
      "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi",
    images: "/images/logo.jpg",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};
const Home = async () => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <MainPage />
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div> */}
      <div className="flex gap-3">
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="tel:0918 638 068"
        >
          0918 638 068
        </Link>{" "}
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="tel:0918 638 068"
        >
          0918 638 068
        </Link>
      </div>
      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            DỊCH VỤ ĐẶT XE Ô TÔ CÓ TÀI XẾ 7 CHỖ, 16 CHỖ, 29 CHỖ ĐÀ LẠT
          </span>
        </Snippet>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Du lịch Trung Thành chuyên tổ chức các tour nội thành Đà Lạt,
              ngoại thành Đà Lạt, thuê xr 5, chỗ, 7 chỗ, 16 chỗ Đà Lạt
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Cùng khám phá thành phố ngàn hoa
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 7 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch nổi tiếng tại Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">900.000 đ</span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 16 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch nổi tiếng tại Đà Lạt, ngoại thành Đà
                Lạt, nội thành Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  1.300.000 đ
                </span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 7 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch, tour săn mây đồi chè cầu đất Đà Lạt,
                nội thành Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  1.100.000 đ
                </span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>{" "}
          </div>
        </div>
      </section>
    </section>
  );
};
export default Home;
