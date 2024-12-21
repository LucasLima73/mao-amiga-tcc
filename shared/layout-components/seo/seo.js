"use client"
import React, { useEffect } from 'react'

const Seo = ({ title }) => {
  useEffect(() => {
    document.title = `Mamix - ${title}`
  }, [])
  
  return (
    <>
    </>
  )
}

export default Seo;