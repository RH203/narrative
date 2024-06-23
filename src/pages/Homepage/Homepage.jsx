import { motion } from "framer-motion";
import { NavigateButton } from "../../components";

const Homepage = () => {
  return (
    <div className="">
      {/* Hero start */}
      <section className=" items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left mb-0">
          <motion.h1
            className="text-gray-600 font-bold text-4xl xl:text-5xl"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            One page Template for
            <span className="text-indigo-400"> Narrative</span>
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-xl leading-relaxed sm:mx-auto lg:ml-0"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </motion.p>
          <motion.div
            className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start"
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          >
            <NavigateButton
              title={"Get started"}
              link={""}
              style={
                "px-7 py-3 w-full bg-white font-semibold text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              }
            />
            <NavigateButton
              title={"Try it out"}
              link={""}
              style={
                "px-7 py-3 w-full bg-indigo-600 font-semibold text-white text-center rounded-md block sm:w-auto"
              }
            />
          </motion.div>
        </div>
        <div className="flex-1 text-center lg:block md:hidden sm:hidden xs:hidden">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </section>

      {/* Hero End */}
    </div>
  );
};

export default Homepage;
