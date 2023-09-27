'use client'
import { FC } from 'react'
import { Flex, FlexProps } from '@chakra-ui/react'

/** 各入力エリア */
export const CustomFlexInputArea: FC<FlexProps> = (props) => {
    return <Flex w="100%" flexDirection="column" {...props} />
}
