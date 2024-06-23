import { motion } from "framer-motion";
import {
  HeadComponent,
  NavigateButton,
  WeeklyItemCard,
} from "../../components";

const Homepage = () => {
  const itemsWeekly = [
    {
      id: 1,
      title: "Title 1",
      category: "Category 1",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      category: "Category 2",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      category: "Category 3",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 1,
      title: "Title 1",
      category: "Category 1",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      category: "Category 2",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      category: "Category 3",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 1,
      title: "Title 1",
      category: "Category 1",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 2,
      title: "Title 2",
      category: "Category 2",
      src: "/sample/product/sample-image.jpg",
    },
    {
      id: 3,
      title: "Title 3",
      category: "Category 3",
      src: "/sample/product/sample-image.jpg",
    },
  ];

  const itemsButtonWeekly = [
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
    {
      id: 1,
      title: "Category 1",
      link: "",
    },
    {
      id: 2,
      title: "Category 2",
      link: "",
    },
    {
      id: 3,
      title: "Category 3",
      link: "",
    },
    {
      id: 4,
      title: "Category 4",
      link: "",
    },
  ];

  return (
    <div className="">
      <HeadComponent title={"Home page"} />
      {/* Hero start */}
      <section className=" items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left mb-0">
          <motion.h1
            className="text-gray-600 font-bold text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            One page Template for
            <span className="text-indigo-400"> Narrative</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-xl leading-relaxed sm:mx-auto lg:ml-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </motion.p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <motion.div
              className=""
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <NavigateButton
                title={"Get started"}
                link={""}
                style={
                  "px-7 py-3 w-full bg-white font-semibold text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
                }
              />
            </motion.div>
            <motion.div
              className=""
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <NavigateButton
                title={"Try it out"}
                link={""}
                style={
                  "px-7 py-3 w-full bg-indigo-600 font-semibold text-white text-center rounded-md block sm:w-auto"
                }
              />
            </motion.div>
          </div>
        </div>
        <div className="flex-1 text-center lg:block md:hidden sm:hidden xs:hidden">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: true }}
            src="/logo/man-with-smartphone.svg"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>
      {/* Hero End */}

      {/* Weekly recommendation start */}
      <div className="mt-28">
        <div>
          <motion.p
            className="font-bold text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Weekly recommendations
          </motion.p>

          <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-3">
            <div className="">
              <motion.p
                className="font-medium text-lg "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Category
              </motion.p>
              <div className="divider my-0"></div>
            </div>
            <div className="lg:block md:hidden sm:hidden xs:hidden">
              <motion.p
                className="font-medium text-lg "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Novels & Comic
              </motion.p>
              <div className="divider my-0"></div>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-5 gap-3">
          {/* Child 1 */}
          <div className="lg:space-y-9 md:space-y-8">
            <motion.div
              className="lg:grid md:grid grid-cols-4 sm:hidden xs:hidden gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {itemsButtonWeekly.map((item, index) => (
                <NavigateButton
                  key={index}
                  title={item.title}
                  link={item.link}
                  style="bg-slate-100 rounded-lg flex items-center font-semibold justify-center lg:py-4 md:py-4 sm:py-1 xs:py-1 hover:bg-slate-400 transition-transform transform-gpu active:scale-90"
                />
              ))}
            </motion.div>

            <motion.div
              className="lg:hidden md:hidden sm:grid-cols-3 xs:grid-cols-3 sm:grid xs:grid gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
            >
              {itemsButtonWeekly.slice(0, 9).map((item) => (
                <NavigateButton
                  key={item.id}
                  title={item.title}
                  link={item.link}
                  style={
                    "bg-slate-100 rounded-lg flex items-center font-semibold justify-center sm:py-2 xs:py-2 hover:bg-slate-400 transition-transform transform-gpu active:scale-90"
                  }
                />
              ))}
            </motion.div>
          </div>
          {/* Child 1 */}

          <div className="lg:hidden md:block sm:block xs:block">
            <motion.p
              className="font-medium text-lg "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              Novels & Comic
            </motion.p>
            <div className="divider my-0"></div>
          </div>

          {/* Child 2 */}
          <div className="">
            <motion.div
              className="lg:grid md:grid lg:grid-cols-3 md:grid-cols-3 sm:hidden xs:hidden gap-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              {itemsWeekly.map((item, index) => (
                <WeeklyItemCard
                  key={index}
                  title={item.title}
                  category={item.category}
                  image={item.src}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="lg:hidden md:hidden grid-cols-2 sm:grid xs:grid gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          >
            {itemsWeekly.slice(0, 6).map((item) => (
              <WeeklyItemCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.src}
              />
            ))}
          </motion.div>
          {/* Child 2 */}
        </div>
      </div>
      {/* Weekly recommendation end */}

      {/* Completed novel start */}
      <div className="mt-28">
        <div>
          <motion.p
            className="font-bold text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Completed books
          </motion.p>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-3">
            <div className="">
              <motion.p
                className="font-medium text-lg "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Novel
              </motion.p>
              <div className="divider my-0"></div>
            </div>
            <div className="">
              <motion.p
                className="font-medium text-lg "
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                Comic
              </motion.p>
              <div className="divider my-0 "></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Child 1 */}
          <motion.div
            className="lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 sm:hidden xs:hidden gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {itemsWeekly.slice(0, 4).map((item, index) => (
              <WeeklyItemCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.src}
              />
            ))}
          </motion.div>

          <motion.div
            className="lg:hidden md:hidden sm:grid xs:grid sm:grid-cols-2 xs:grid-cols-1 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {itemsWeekly.slice(0, 4).map((item, index) => (
              <WeeklyItemCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.src}
              />
            ))}
          </motion.div>
          {/* Child 1 */}

          {/* Child 2 */}
          <motion.div
            className="lg:grid md:grid lg:grid-cols-4 md:grid-cols-2 sm:hidden xs:hidden gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {itemsWeekly.slice(0, 4).map((item, index) => (
              <WeeklyItemCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.src}
              />
            ))}
          </motion.div>

          <motion.div
            className="lg:hidden md:hidden sm:grid xs:grid sm:grid-cols-2 xs:grid-cols-1 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            {itemsWeekly.slice(0, 4).map((item, index) => (
              <WeeklyItemCard
                key={index}
                title={item.title}
                category={item.category}
                image={item.src}
              />
            ))}
          </motion.div>
          {/* Child 2 */}
        </div>
      </div>
      {/* Completed novel End */}

      {/* Newslater start */}
      <section className="max-w-xl my-32 mx-auto px-4 md:px-8">
        <div className="space-y-3 text-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 mx-auto text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            initial={{ x: -100, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
            />
          </motion.svg>
          <motion.h3
            className="text-3xl text-gray-800 font-bold"
            initial={{ x: -100, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Subscribe to our newsletter
          </motion.h3>
          <motion.p
            className="text-gray-400 leading-relaxed"
            initial={{ x: -100, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            Stay up to date with the roadmap progress, announcements and
            exclusive discounts feel free to sign up with your email.
          </motion.p>
        </div>
        <div className="mt-6">
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            className="items-center justify-center sm:flex"
            initial={{ x: -100, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="text-gray-500 w-full p-3 rounded-md border outline-none focus:border-indigo-600"
            />
            <button className="w-full mt-3 px-5 py-3 rounded-md text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 duration-150 outline-none shadow-md focus:shadow-none focus:ring-2 ring-offset-2 ring-indigo-600 sm:mt-0 sm:ml-3 sm:w-auto">
              Subscribe
            </button>
          </motion.form>
          <motion.p
            className="mt-3 mx-auto text-center max-w-lg text-[15px] text-gray-400"
            initial={{ x: -100, y: 0 }}
            whileInView={{ x: 0, y: 0 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            No spam ever, we are care about the protection of your data. Read
            our{" "}
            <a className="text-indigo-600 underline" href="javascript:void(0)">
              {" "}
              Privacy Policy{" "}
            </a>
          </motion.p>
        </div>
      </section>
      {/* Newslater end */}
    </div>
  );
};

export default Homepage;
