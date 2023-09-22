import { useSortable } from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities"

const Each = ({image}) => {
    const {attributes, listeners,setNodeRef,transform,transition,isDragging} = useSortable({id: image.id});
    const style = {transition, transform: CSS.Transform.toString(transform)}

    return ( 
      <div ref={setNodeRef} style={style} {...attributes} {...listeners}  key={image.id} className={`${isDragging?'opacity-50 bg[rgba(0,0,0,0.8)]': 'opacity-100'} cursor-grab w-10/12 mx-auto`}>
        <div className="gap-1 h-[12rem] md:h-[30rem] lg:h-[35rem] xl:h-[30rem] my-4 duration-100  bg-white rounded-md"> 
            <img src={image.image} alt={image.name} className='w-full h-5/6 pic rounded-t-md lg:rounded-t-lg'/>
            <div className='text h-1/6 flex items-center px-1 md:px-2'>
              <p className='text-black text-xs md:text-xl capitalize'>{image.name}</p>
            </div>
        </div>
      </div> 
    );
}
 
export default Each;