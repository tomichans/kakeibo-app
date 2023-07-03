'use client'
import { FC } from 'react'
import { FormLabel, FormLabelProps } from '@chakra-ui/react'

/** ラベル */
export const CustomFormLabel: FC<FormLabelProps> = (props) => {
    return (
        <FormLabel
            fontSize="15px"
            fontWeight="600"
            marginBottom="3px"
            {...props}
        />
    )
}
