import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Image } from "@nextui-org/image";
import Footers from "@/components/footer/Footer";
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/images/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="vi">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />

            <main className="container mx-auto max-w-7xl pt-0 px-3 flex-grow">
              {children}
            </main>
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm">
                  <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                    Review Dịch vụ đặt xe 7 chỗ, 16 chỗ Đà Lạt
                  </h2>
                  <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                    Review Dịch vụ đặt xe Đà Lạt từ khách hàng Chất lượng dịch
                    vụ là phương châm phát triển của chúng tôi !!!.
                  </p>
                </div>
                <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
                  <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Bảng giá cho thuê xe ô tô Đà Lạt trong năm 2024
                      </h3>
                      <p className="my-4">
                        <p className="text-primary">
                          Thuê xe 7 chỗ tại Đà Lạt Sẵn sàng tư vấn và sắp xếp
                          các loại xe cũng như dịch vụ phù hợp với mục đích
                          chuyến đi của bạn. Quy trình đơn giản, thuận tiện; Đội
                          ngũ nhân viên sẵn sàng tư vấn 24/24. Đội ngũ hướng dẫn
                          viên chuyên nghiệp, nhiệt tình tư vấn miễn phí . Đặt
                          xe trươc để được hưởng giá tốt nhất, ưu đãi nhất, xe
                          tốt nhất.
                        </p>{" "}
                      </p>

                      <p className="my-4">Chất lượng tốt</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Anh Nam</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Công ty du lịch Đà Nẵng
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Thuê xe Ford Transit đi Đà Lạt
                      </h3>
                      <p className="my-4">
                        <p className="text-primary">
                          Thuê xe Ford Transit đi Đà Lạt Vẻ ngoài của xe Ford
                          Transit 16 Đà Lạt được đánh giá là “bề thế” và “vững
                          chãi”. Xe được thiết kế mang đậm chất cơ bắp của dòng
                          xe Mỹ Xe được trang bị kính cách nhiệt tối màu vì vậy
                          khi ngồi trên xe không lo ánh nắng gắt dội vào ảnh
                          hưởng tới sức khỏe, làn da.
                        </p>
                      </p>
                      <p className="my-4">
                        Tôi rất hài lòng vì chuyến đi ấn tượng, thanh lịch của
                        người Đà Lạt
                      </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Anh Tiến</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Hà Nội
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  {/* <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Mindblowing workflow and variants
                      </h3>
                      <p className="my-4">
                        "As someone who mainly designs in the browser, I've been
                        a casual user of Figma, but as soon as I saw and started
                        playing with FlowBite my mind was 🤯.
                      </p>
                      <p className="my-4">
                        Everything is so well structured and simple to use (I've
                        learnt so much about Figma by just using the toolkit).
                      </p>
                      <p className="my-4">
                        Aesthetically, the well designed components are
                        beautiful and will undoubtedly level up your next
                        application."
                      </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Software Engineer at Facebook
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Efficient Collaborating
                      </h3>
                      <p className="my-4">
                        "This is a very complex and beautiful set of elements.
                        Under the hood it comes with the best things from 2
                        different worlds: Figma and Tailwind.
                      </p>
                      <p className="my-4">
                        You have many examples that can be used to create a fast
                        prototype for your team."
                      </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Joseph McFall</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          CTO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure> */}
                </div>
                <div className="text-center">
                  <a
                    href="/gioi-thieu"
                    className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    xem thuê xe nhiều hơn...
                  </a>
                </div>
              </div>
            </section>

            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="/"
                title="nextui.org homepage"
              >
                Thuê xe ô tô đi Đà Lạt, tham quan, đưa đón sân bay tại Đà Lạt
              </Link>
            </footer>

            <Footers />
            <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                <div className="hotline-phone-ring-circle" />
                <div className="hotline-phone-ring-circle-fill" />
                <div className="hotline-phone-ring-img-circle">
                  <a href="tel: 0918638068" className="pps-btn-img">
                    <img
                      src="https://wiki.minhduy.vn/wp-content/uploads/2022/07/icon-call-nh.png"
                      alt="Gọi điện thoại"
                      width={50}
                    />
                  </a>
                </div>
              </div>
              <div className="hotline-bar">
                <a href="tel: 0918638068">
                  <span className="text-hotline"> 0918 638 068</span>
                </a>
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
