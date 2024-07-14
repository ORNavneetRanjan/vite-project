import react from 'react';

function Navibar({totalCount}){
  return (
    <>
    <div className=''>
      <div className="max-w-screen-lg bg-white flex items-center justify-between px-8 py-2 m-auto">
        <a href="#">
          <img
          className="h-full w-40 object-cover"
          src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-640x400.png"
          alt="app logo"
        />
        </a>
        <a className='relative' href="#">
          <img
            className="w-20 h-12 object-scale-down rounded-full"
            src="https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg"
            alt="second logo"
          />
          <p className='absolute right-0 top-0 text-white bg-sky-500 p-1 rounded-full'>{totalCount}</p>
        </a>
      </div>
      </div>
    </>
  );  
}

export default Navibar;