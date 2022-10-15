import { theme } from "@/styles/theme"
import { styled } from '@mui/material'

export const CurrentAuthHolder = styled('div')`
  background: rgba(0, 0, 0, 0.25);
  width: 40px;
  height: 40px;
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  transition: all 0.5s;
  border-radius: 8px;
  position: relative; all 0.3s;
  text-transform: capitalize;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.2s;
    transform: scale(1.2,1.2);
  }
  &:before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-radius: 8px;
    height: 100%;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
  }
  &:hover::after{
    opacity: 1;
    border-radius: 8px;
    transform: scale(1,1);
  }
  &:hover::before{
    opacity: 0 ;
    border-radius: 8px;
    transform: scale(0.5,0.5);
  }`
