import React, { useState } from 'react'

export default function Truncate(str) {
  return str.length > 100 ? str.substring(0, 97) + "..." : str;

}
