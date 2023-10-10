'use client';
import { FC } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';

/** 登録ボタン */
export const CustomLoginButton: FC<ButtonProps> = (props) => {
    return (
        <Button
            w="100%"
            bgColor="#0563b4"
            border="none"
            borderRadius="5px"
            color="white"
            cursor="pointer"
            fontSize="15px"
            transition="all 0.3s"
            padding="10px 30px"
            marginTop="10px 0 0 0"
            _hover={{ bg: '#0e528d' }}
            {...props}
        />
    );
};
