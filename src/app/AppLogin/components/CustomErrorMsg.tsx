'use client'
import { FC } from 'react'
import { Box, BoxProps, Icon } from '@chakra-ui/react'
import { WarningIcon } from '@chakra-ui/icons'

/** エラーメッセージ */
export const CustomErrorMsg: FC<BoxProps> = (props) => {
    // return <Box color="red" margin="0" alignSelf="flex-start" {...props} />
    return (
        <Box
            color="red"
            margin="0"
            alignSelf="flex-start"
            display="flex"
            alignItems="center"
            {...props}
        >
            <Icon as={WarningIcon} boxSize={4} marginRight={2} />
            {props.children}
        </Box>
    )
}
