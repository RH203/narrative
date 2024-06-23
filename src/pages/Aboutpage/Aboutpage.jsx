import {HeadComponent, InfoCard} from "../../components";
import { BiStoreAlt } from "react-icons/bi";
import { BsCoin } from "react-icons/bs";
import { BsHandbag } from "react-icons/bs";
import { CiBag1 } from "react-icons/ci";

const Aboutpage = () => {
  const items = [
    {
      id: 1,
      title: "10.5k",
      img: (<BiStoreAlt />),
      desc: "Sallers active our site"
    },
    {
      id: 2,
      title: "33k",
      img: (<BsCoin />),
      desc: "Monthly Produduct Sale"
    },
    {
      id: 3,
      title: "45.5k",
      img: (<BsHandbag />),
      desc: "Customer active in our site"
    },
    {
      id: 4,
      title: "25k",
      img: (<CiBag1 />),
      desc: "Anual gross sale in our site"
    }
  ];
  
  return (
    <div>
      <HeadComponent title={"About page"} />
      {/* Hero page Start */}
      <div className="grid grid-cols-2">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-black font-bold text-4xl xl:text-5xl">
            Our Story
          </h1>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. 
            Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
          </p>
          <p className="text-gray-500 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
          </p>
        </div>
        <div>
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full"
          />
        </div>
      </div>
      {/* Hero page End */}
      <div className="grid grid-cols-4 gap-5">
        {
          items.map((item) => (
            <InfoCard key={item.id} title={item.title} img={item.img} desc={item.desc} style={"w-full mx-auto sm:w-10/12 lg:w-full"} />
          ))
        }
      </div>
    </div>
  );
};

export default Aboutpage;
