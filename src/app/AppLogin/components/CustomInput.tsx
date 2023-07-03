'use client'
import { FC } from 'react'
import { Input, InputProps } from '@chakra-ui/react'

/** テキストボックス */
export const CustomInput: FC<InputProps> = (props) => {
    return (
        <Input
            border="1px solid grey"
            bgColor="white"
            padding="20px"
            borderRadius="4px"
            type="text"
            _focus={{ outline: '#none' }}
            {...props}
        />
    )
}
