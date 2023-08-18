import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { Images } from '@/app/json/json';

const Body = () => {
  return (
   <div>
    <div className="Home  py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-3xl font-bold italic mb-4 text-red-500">
            All Fast Food is <br />
            Available at Foodle
          </h1>
          <p className="text-lg mb-6">
            We Are Just A Click Away When You <br />
            Crave For Delicious Fast Food
          </p>
          <a href="#" className="btn-primary inline-flex items-center">
            <FontAwesomeIcon className="icon mr-2" icon={faBagShopping} /> Buy Now
          </a>
          <p className="text-xs mt-3">How to order</p>
        </div>
        <div className="md:w-1/2">
          <img src="./img.jpeg" alt="" />
        </div>
      </div>
    </div>

    {/* // **************** */}

    <div className="services  py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="flex items-center">
        <img src="./fastdeliveryicon.png" alt="" />
          <div>
            <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
            <p>The Food Will Be Delivered To <br />
              Your Home within 1-2 Hours Of <br />
              Your Ordering</p>
          </div>
        </div>
        <div className="flex items-center">
        <img src="./freshfoodicon.png" alt="" />
          <div>
            <h4 className="text-xl font-semibold mb-2">Fresh Food</h4>
            <p>Your Food Will Be Delivered <br />
              100% Fresh To Your Home. We <br />
              Do Not Deliver Stale Food</p>
          </div>
        </div>
        <div className="flex items-center">
        <img src="./fastdeliveryicon.png" alt="" />
          <div>
            <h4 className="text-xl font-semibold mb-2">Free Delivery</h4>
            <p>Your Food delivery Is <br />
              Absolutely Free. No Cost <br />
              Just Order and Enjoy</p>
          </div>
        </div>
      </div>
    </div>


    {/* **********categories************** */}


    <div className="categories py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center categories-text">
          <div>
            <p className="bestcategories text-6xl font-bold italic text-red-600 mb-4">
              Best <span className="text-red-600">Delivered</span> <br />
              Categories
            </p>
          </div>
          <div>
            <p className="bestcategories2 text-lg mt-10 md:mt-0">
              Here Are Some Of Our Best Distributed <br />
              Categories, If You Can Order <br />
              From Here
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 categories-img">
          <div className="text-center">
          <img src="./chicken fry.jpg" alt="" />
            <h3 className="text-xl font-bold mt-2">Chicken Burger</h3>
            <p className="mt-1">
              <a href="#" className="text-red-600">
                Order Now 
                {/* <FontAwesomeIcon className="icon ml-1" icon={faGreaterThan} /> */}
              </a>
            </p>
          </div>

          <div className="text-center">
          <img src="./chicken pizza.jpg" alt="" />
          <h3 className="text-xl font-bold mt-2">Chicken Pizza</h3>
            <p className="mt-1">
              <a href="#" className="text-red-600">
                Order Now 
                {/* <FontAwesomeIcon className="icon ml-1 text-xs" icon={faGreaterThan} /> */}

              </a>
            </p>
          </div>

          <div className="text-center">
          <img src="./french fries.jpg" alt="" />
            <h3 className="text-xl font-bold mt-2">French Fries</h3>
            <p className="mt-1">
              <a href="#" className="text-red-600">
                Order Now 
                {/* <FontAwesomeIcon className="icon ml-1" icon={faGreaterThan} /> */}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
{/* // ****menu******** */}

<div className="image grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 ml-1">
  {Images.map((imag, id) => (
    <div className="container bg-white rounded-lg shadow-md p-4" key={id}>
      <img
        src='./chicken fry.jpg'
        alt="product"
        className="max-w-full mb-2 border-90 border-red-500"
        style={{
          width: '80%',
          borderRadius: '50%',
          border: '10px solid red'
        }}
      />
      <div className="text-center">
        <h1 className="text-xl font-semibold mt-3">{imag.title}</h1>
        <p className="text-gray-500 mt-2">
          {/* {imag.ratings} */}
          </p>
        <p className="text-lg font-semibold mt-2">{imag.price}</p>
        <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded-full focus:outline-none">
          {imag.button}
        </button>
        <p className="text-sm text-gray-400 mt-2">{imag.tag}</p>
      </div>
    </div>
  ))}
</div>





{/* *************offers************ */}

<div className="offers py-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
        <img src="./food dish.jpg" alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 offers2">
          <div>
          <img src="./foodish3.jpg" alt="" />
          </div>

          <div>
          <img src="./fooddish.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>




  );
};



export default Body;
