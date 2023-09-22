import { useState } from 'react';
import Imag from '../../public/Images'
import { DndContext, KeyboardSensor, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, rectSwappingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable';
import Each from '../Each';


const Images = ({word}) => {
  const [listItems, setListItems] = useState(Imag);

  const onDragEnd = (event) => {
    const {active, over} = event;
    if(active.id !== over.id) {
      setListItems(listItems => {
      const oldindex=listItems.findIndex((listItem) => listItem.id === active.id)
      const newindex=listItems.findIndex((list)=> list.id === over.id)
      return arrayMove(listItems, oldindex, newindex);
      })
    }
  }

  const lists = listItems.filter(each => each.name.includes(word))
  const sensors = useSensors(MouseSensor, TouchSensor, KeyboardSensor)
  const touchSensor = useSensor(TouchSensor)
  
  return (
    <>
    {lists.length <= 0 ? 
      <div className=' h-[100vh] flex justify-center items-center px-2 lg:w-9/12 lg:mx-auto'>
        <h2 className='text-white text-2xl lg:text-4xl text-center'>sorry... I Couldn&apos;t find your search, but i can get your next search...</h2>
      </div> :
    <section className=" w-11/12 mt-20 mx-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={listItems} strategy={rectSwappingStrategy}>
       {lists.map((e)=>(
        <Each key={e.id} image={e}/>))}
      </SortableContext>
    </DndContext>
    </section>  
    }
    </>
     
    )}
 
export default Images;
