import React, { useEffect, useState } from 'react'
import { Keyboard } from 'react-native'

export default function useKeyboard() {
  const [keyboard, setKeyboard] = useState({ Keyboard })

  function keyboardShown(e) {
    setKeyboard({
      isKeyboardShow: true,
      Keyboard,
      endCoordinates: e.endCoordinates,
      startCoordinates: e.startCoordinates
    })
  }

  function keyboardHidden(e) {
    setKeyboard({
      isKeyboardShow: false,
      Keyboard,
      endCoordinates: e.endCoordinates,
      startCoordinates: e.startCoordinates
    })
  }

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardShown
    )

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardHidden
    )

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])
  return keyboard
}
