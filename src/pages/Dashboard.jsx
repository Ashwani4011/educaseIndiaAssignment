import edutaskimage from '../assets/Ellipse.png'
import educamera from '../assets/educamera.svg'
function Dashboard() {
  return (
    <>
      <div className="w-full p-4 h-[10%]  mt-0 bg-white ">
        <h1 className=" text-xl font-semibold">
          Account Settings
        </h1>
      </div>
      <div className="p-6 pt-10 mb-0 h-[90%] bg-gray-100">
        <div className="mb-4 flex items-center relative  gap-4">
          <div className='relative'>
            <img src={edutaskimage} className="h-18 w-18 mb-0 rounded-full bg-gray-300" />
            <img src={educamera} className="h-4 w-4 absolute z-0 bottom-2 right-1.5 mb-0 rounded-full bg-gray-300" />
          </div>
          <span className='absolute -top-2 left-22 '>
            <p className="font-semibold">Marry Doe</p>
            <p className="text-sm text-gray-500">Marry@Gmail.com</p>
          </span>
        </div>
        <p className="text-sm text-gray-600">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore
          Magna Aliquyam Erat, Sed Diam
        </p>
        <hr className="mt-6 w-full border-t border-dashed border-gray-300" />
        <hr className="mt-100 w-full border-t border-dashed border-gray-300" />
      </div> 
      </>
    
  );
}

export default Dashboard;
