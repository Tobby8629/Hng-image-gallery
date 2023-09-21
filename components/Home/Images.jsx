import { useState } from 'react';
import Imag from '../../public/Images'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

const Images = () => {
  const [listItems, setListItems] = useState(Imag);
  const onDragEnd = (result) => {
    if (!result.destination) return;
   
    const items = Array.from(listItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
       items.splice(result.destination.index, 0, reorderedItem);
   
       setListItems(items);
     };

  // const onDragEnd = (result) => {
  //   console.log(result)
  //   if (!result.destination) return;

  //   const newListItems = Array.from(listItems);
  //   const [removed] = newListItems.splice(result.source.index, 1);
  //   newListItems.splice(result.destination.index, 0, removed);

  //   setListItems(newListItems);
  // };
 
    return ( 
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks" >
        {(provided) => (
          <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3" ref={provided.innerRef} {...provided.droppableProps}>
            {listItems.map((e, index)=>(
              <Draggable  key={e.id} draggableId={e.id.toString()} index={index}>
                {(provided)=>(
                  <div className="gap-1 md:h-[30rem] lg:h-[35rem] mr-4 my-4 duration-100 slow relative" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}> 
                    <img src={e.image} alt={e.name} className='w-full h-full pic'/>
                    <div className='text opacity-10'>
                      <p className=' text-sm md:text-xl xl:text-2xl capitalize absolute bottom-2 left-1 md:bottom-4 md:left-2'>{e.name}</p>
                    </div>
                  </div> 
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </section>
        )}
        </Droppable>
      </DragDropContext>
    );
}
 
export default Images;