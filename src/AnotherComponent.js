import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ChangeToAbhishek, ChangeToAkhilesh, ChangeToAnurag, ChangeToAvinash, ChangeToAyushi, ChangeToDeepak, ChangeToKiran, ChangeToVivek } from './redux/action creator/ActionCreator';

export default function AnotherComponent() {

const x = useSelector((state)=>{
    return state
})

const dispatch = useDispatch();

  return (
      <>
        
        <div>AnotherComponent</div>
        {console.log(x.reducer2.name)}
        {x.reducer2.name}
        <button type="button" onClick={ ()=>{dispatch(ChangeToAbhishek()) } }>Change abhisehk</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToKiran())} }>Change kiran</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToAyushi())} }>Change ayushi</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToAvinash())} }>Change avinash</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToAnurag())} }>Change anurag</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToAkhilesh())} }>Change akhilesh</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToVivek())} }>Change vivek</button>
        <button type="button" onClick={ ()=>{dispatch(ChangeToDeepak())} }>Change deepak</button>
      </>
  )
}
