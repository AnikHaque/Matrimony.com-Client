import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetItemByIdQuery } from '../../features/Item/itemApi';

export const ItemDetails = () => {
    const {id} = useParams();
    const {data} = useGetItemByIdQuery(id);
    const {position} = data || {}
   
  return (
    <div>ItemDetail: {id}
    <h1>Hi: {position}</h1>
    </div>
  )
}

