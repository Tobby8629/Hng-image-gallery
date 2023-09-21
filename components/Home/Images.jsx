import { useState } from 'react';
import Imag from '../../public/Images'
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Each from '../Each';


const Images = () => {
  const [listItems, setListItems] = useState(Imag);

  const onDragEnd = (event) => {
    const {active, over} = event;
    if(active.id === over.id) {
      return;
    }
    setListItems(listItems => {
    const oldindex=listItems.findIndex((listItem) => listItem.id === active.id)
    const newindex=listItems.findIndex((list)=> list.id === over.id)
    return arrayMove(listItems, oldindex, newindex);
    })
  }
  
  return ( 
    
    <section className=" w-11/12 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={listItems} strategy={verticalListSortingStrategy}>
      {listItems.map((e)=>(
        <Each key={e.id} image={e}/>
      ))}
      </SortableContext>
    </DndContext>
    </section>  
  );

}
 
export default Images;
