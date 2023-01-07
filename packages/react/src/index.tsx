import React from 'react'
import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray500',
  borderRadius: '$md',
  padding: '$4',
  height: '$10',
})

export function Appp() {
  return <Button>Hello World</Button>
}
