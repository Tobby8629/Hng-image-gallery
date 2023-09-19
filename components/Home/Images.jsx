import Imag from '../../public/Images'

const Images = () => {
    return ( 
      <section className=" grid grid-cols-2 lg:grid-cols-3">
        {Imag.map((e)=>(
          <div key={e.id} className="gap-1 h-[14rem] md:h-[30rem] lg:h-[35rem] mr-4 my-4 duration-100 slow relative">
            <img src={e.image} alt={e.name} className='w-full h-full pic'/>
            <div className='text opacity-10'>
              <p className=' text-sm md:text-xl xl:text-2xl capitalize absolute bottom-2 left-1 md:bottom-4 md:left-2'>{e.name}</p>
            </div>
          </div>  
        ))}
      </section>
    );
}
 
export default Images;