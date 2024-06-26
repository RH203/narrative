import { AnimatedCounter, HeadComponent, InfoCard } from "../../components";
import { BiStoreAlt } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { CiBag1 } from "react-icons/ci";
import { motion } from "framer-motion";

const Aboutpage = () => {
  const items = [
    {
      id: 1,
      title: (
        <AnimatedCounter
          from={0}
          to={10}
          duration={2}
          animationOptions={{ ease: "linear" }}
        />
      ),
      img: <BiStoreAlt size={60} />,
      desc: "Sallers active our site",
    },
    {
      id: 2,
      title: (
        <AnimatedCounter
          from={0}
          to={33}
          duration={3}
          animationOptions={{ ease: "linear" }}
        />
      ),
      img: <BsCoin size={60} />,
      desc: "Monthly Produduct Sale",
    },
    {
      id: 3,
      title: (
        <AnimatedCounter
          from={0}
          to={45}
          duration={3}
          animationOptions={{ ease: "linear" }}
        />
      ),
      img: <BsHandbag size={60} />,
      desc: "Customer active in our site",
    },
    {
      id: 4,
      title: (
        <AnimatedCounter
          from={0}
          to={25}
          duration={2.5}
          animationOptions={{ ease: "linear" }}
        />
      ),
      img: <CiBag1 size={60} />,
      desc: "Anual gross sale in our site",
    },
  ];

  return (
    <div>
      <HeadComponent title={"About page"} />
      {/* Hero page Start */}
      <div className="flex">
        <div className="space-y-8 xs:text-center sm:text-center lg:text-left flex-1">
          <motion.h1
            className="text-black font-bold text-4xl xl:text-5xl"
            initial={{ x: 0, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          >
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </motion.p>
          <motion.p
            className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          >
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </motion.p>
        </div>
        <div className="lg:block md:hidden sm:hidden xs:hidden flex-1">
          <motion.img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12 lg:w-full lg:block md:block sm:hidden xs:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
          />
        </div>
      </div>
      {/* Hero page End */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 gap-5 mt-28">
        {items.map((item) => (
          <InfoCard
            key={item.id}
            title={item.title}
            img={item.img}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default Aboutpage;
