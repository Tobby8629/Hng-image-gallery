import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

const Each = ({image}) => {
    const {attributes, listeners,setNodeRef,transform,transition} = useSortable({id: image.id});
    const style = {transition, transform: CSS.Transform.toString(transform)}

    return ( 
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}  key={image.id}>
        <div className="gap-1 md:h-[30rem] lg:h-[35rem] xl:h-[30rem] mr-4 my-4 duration-100 slow relative"> 
            <img src={image.image} alt={image.name} className='w-full h-full pic'/>
            <div className='text opacity-10'>
              <p className=' text-white text-sm md:text-xl xl:text-2xl capitalize absolute bottom-2 left-1 md:bottom-4 md:left-2'>{image.name}</p>
            </div>
        </div>
      </div> 
    );
}
 
export default Each;