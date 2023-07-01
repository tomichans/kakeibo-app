'use client'
import { useState, FC } from "react";
import {
  Box, Flex, FormControl, FormLabel, Input, Button,
  ButtonProps, InputProps, FormLabelProps, BoxProps, FlexProps
} from '@chakra-ui/react'

/** ログイン情報 */
interface ILoginInfo {
  /** ユーザー名 */
  username: string;
  /** メールアドレス */
  mailAddress: string;
  /** パスワード */
  password: string;
}

/** ログイン情報デフォルト値 */
const ILoginInfoDefault: ILoginInfo = {
  /** ユーザー名 */
  username: "",
  /** メールアドレス */
  mailAddress: "",
  /** パスワード */
  password: "",
}

//#region カスタムコンポーネント

/** 登録ボタン */
// TODO グローバルファイルに定義して流用できるようにする
const CustomRegBtn: FC<ButtonProps> = (props) => {
  return <Button
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
    {...props} />
}

/** テキストボックス */
// TODO グローバルファイルに定義して流用できるようにする
const CustomInput: FC<InputProps> = (props) => {
  return <Input
    border="1px solid grey"
    padding="20px"
    borderRadius="4px"
    type="text"
    _focus={{ outline: '#none' }}
    {...props} />
}

/** ラベル */
// TODO グローバルファイルに定義して流用できるようにする
const LocalCustomFormLabel: FC<FormLabelProps> = (props) => {
  return <FormLabel
    fontSize="15px"
    fontWeight="600"
    marginBottom="3px"
    {...props} />
}

/** エラーメッセージ */
const LocalErrMsg: FC<BoxProps> = (props) => {
  return <Box
    color="red"
    margin="0"
    alignSelf="flex-start"
    {...props} />
}

/** 各入力エリア */
const LocalFlexInputArea: FC<FlexProps> = (props) => {
  return <Flex
    w="100%"
    flexDirection="column"
    {...props} />
}

//#endregion

export default function AppLogin() {
  /** 初期値 */
  const initValues = ILoginInfoDefault;

  const [formValues, setFormValues] = useState(initValues);
  const [formErros, setFormErrors] = useState(initValues);
  const [isSubmit, setIsSubmit] = useState(false);

  /** 
   * 各テキストボックス更新時処理 
   * @param e イベントハンドラ
   */
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  /**
   * 送信時処理
   * @param e イベントハンドラ
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  /**
   * バリデーションチェック
   * @param values 
   * @returns 
   */
  const validate = (values: any) => {
    const errors = initValues;
    //半角英数字のみ(空文字OK)
    const regex =
      /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
    //valueが空ならerrrosの配列に入れる。
    if (!values.username) {
      errors.username = "ユーザー名を入力してください。";
    }
    if (!values.mailAddress) {
      errors.mailAddress = "メールアドレスを入力してください。";
    } else if (!regex.test(values.mailAddress)) {
      errors.mailAddress = "正しいメールアドレスを入力してください";
    }
    if (!values.password) {
      errors.password = "パスワードを入力してください。";
    } else if (values.password.length < 4) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    } else if (values.password.length > 15) {
      errors.password = "4文字以上15文字以下のパスワードを入力してください";
    }
    return errors;
  };

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
        onSubmit={handleSubmit}>
        <Box textAlign="center" margin="13px 0">ログイン</Box>
        <Flex h="400px" flexDirection="column" alignItems="center" justify="space-evenly">
          {/* username */}
          <LocalFlexInputArea>
            <LocalCustomFormLabel>username</LocalCustomFormLabel>
            <CustomInput name="username" placeholder="username"
              value={formValues.username}
              onChange={(e) => handleChange(e)}
            ></CustomInput>
          </LocalFlexInputArea>
          <LocalErrMsg>{formErros.username}</LocalErrMsg>

          {/* mailAddress */}
          <LocalFlexInputArea>
            <LocalCustomFormLabel>mailAddress</LocalCustomFormLabel>
            <CustomInput name="mailAddress" placeholder="mailAddress"
              value={formValues.mailAddress}
              onChange={(e) => handleChange(e)}
            ></CustomInput>
          </LocalFlexInputArea>
          <LocalErrMsg>{formErros.mailAddress}</LocalErrMsg>

          {/* password */}
          <LocalFlexInputArea>
            <LocalCustomFormLabel>password</LocalCustomFormLabel>
            <CustomInput name="password" placeholder="password"
              value={formValues.password}
              onChange={(e) => handleChange(e)}
            ></CustomInput>
          </LocalFlexInputArea>
          <LocalErrMsg>{formErros.password}</LocalErrMsg>

          <CustomRegBtn>登録</CustomRegBtn>
          {Object.keys(formErros).length === 0 && isSubmit && (
            <Box color="green" marginTop="15px">ログインに成功しました</Box>
          )}
        </Flex>
      </FormControl>
    </Flex>
  );
}
