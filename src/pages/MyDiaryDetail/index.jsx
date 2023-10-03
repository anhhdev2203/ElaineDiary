import React from 'react'
import { useParams } from 'react-router';

function MyDiaryDetail() {
    const para = useParams();
    const {id} = para;
  return (
    <div>MyDiaryDetail {id}</div>
  )
}

export default MyDiaryDetail