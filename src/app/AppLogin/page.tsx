'use client'
import { Box, Flex, FormControl } from '@chakra-ui/react'
import { useAppLogin } from '../hooks/useAppLogin'
import { CustomLoginButton } from './components/CustomLoginButton'
import { CustomInput } from './components/CustomInput'
import { CustomFormLabel } from './components/CustomFormLabel'
import { CustomErrorMsg } from './components/CustomErrorMsg'
import { CustomFlexInputArea } from './components/CustomFlexInputArea'

/**
 * ログイン画面
 */
export default function AppLogin() {
    const {
        loginInfo,
        isLoginSuccess,
        isCorrectUsername,
        isCorrectPassword,
        isInit,
        changeText,
        onClickLogin,
    } = useAppLogin()

    return (
        <Flex align="center" justify="center" h="100vh" w="100%">
            <FormControl
                w="70%"
                maxW="450px"
                border="1px solid #dfefef"
                borderRadius="15px"
                boxShadow="2px 12px 17px -7px #383838"
                padding="30px"
                bgColor="#fbf5f5"
            >
                <Flex
                    h="250px"
                    flexDirection="column"
                    alignItems="center"
                    justify="space-evenly"
                >
                    {/* ユーザー名 */}
                    <CustomFlexInputArea>
                        <CustomFormLabel>ユーザー名</CustomFormLabel>
                        <CustomInput
                            name="username"
                            placeholder="ユーザー名"
                            value={loginInfo.username}
                            onChange={(e) => changeText(e)}
                        ></CustomInput>
                    </CustomFlexInputArea>
                    <CustomErrorMsg
                        display={
                            !isCorrectUsername && !isInit ? 'block' : 'none'
                        }
                    >
                        ユーザー名を正しく入力してください。
                    </CustomErrorMsg>

                    {/* パスワード */}
                    <CustomFlexInputArea>
                        <CustomFormLabel>パスワード</CustomFormLabel>
                        <CustomInput
                            name="password"
                            placeholder="パスワード"
                            value={loginInfo.password}
                            onChange={(e) => changeText(e)}
                        ></CustomInput>
                    </CustomFlexInputArea>
                    <CustomErrorMsg
                        display={
                            !isCorrectPassword && !isInit ? 'block' : 'none'
                        }
                    >
                        パスワードを正しく入力してください。
                    </CustomErrorMsg>

                    <CustomLoginButton onClick={(e) => onClickLogin(e)}>
                        ログイン
                    </CustomLoginButton>

                    <Box
                        color="green"
                        marginTop="15px"
                        display={isLoginSuccess && !isInit ? 'block' : 'none'}
                    >
                        ログインに成功しました。
                    </Box>
                </Flex>
            </FormControl>
        </Flex>
    )
}
