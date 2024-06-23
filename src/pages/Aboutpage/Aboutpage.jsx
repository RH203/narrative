import {
  HeadComponent,
} from "../../components";

const Aboutpage = () => {
  return (
    <div className="w-10/12 mx-auto">
      <HeadComponent title={"About page"} />
      {/* Hero page Start */}
      <div>
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
        <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-between items-center gap-n">
          <a className="rows">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
            <h6>
              10.5k
            </h6>
            <small>
              Sallers active our site
            </small>
          </a>
          <a className="rows">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
            <h6>
              33k
            </h6>
            <small>
              Mopnthly Produduct Sale
            </small>
          </a>
          <a className="rows">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
            <h6>
              45.5k
            </h6>
            <small>
              Customer active in our site
            </small>
          </a>
          <a className="rows">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
            <h6>
              25k
            </h6>
            <small>
              Anual gross sale in our site
            </small>
          </a>
        </div>
      </div>
      {/* Hero page End */}
    </div>
  );
};

export default Aboutpage;
